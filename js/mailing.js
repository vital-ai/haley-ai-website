
function mailing_signup(email, successCallback, errorCallback) {
	console.log('signing up, email', email)
	_mailing_action('signup', email, successCallback, errorCallback);
}

function mailing_remove(email, successCallback, errorCallback) {
	console.log('remove, email', email)
	_mailing_action('remove', email, successCallback, errorCallback);
}

function _mailing_action(action, email, successCallback, errorCallback) {
	
	$.ajax({
		url: 'https://portal-app.haley.ai/mailing/',
		type: "POST",
		data: JSON.stringify({action: action, email: email}),
		contentType:"application/json; charset=utf-8",
		dataType: "json"
	}).done(function(data, textStatus, jqXHR) {
		
		console.log("mailing " + action + " response ", data);

		if(data.ok) {
			successCallback(data.message)
		} else {
			var error = data.message;
			if(!error) error("unknown error");
			errorCallback(null, error);
		}
		
	}).fail(function() {
		
		console.error("mailing action " + action + " error ", arguments);
		
		var error = arguments[2];
		if(!error) error = "unknown other error";
		
		errorCallback(null, error);
	});
	
}

//UI PART
$(function(){

  //disable form element
  $('#signup-form-el').submit(function() {
    return false;
  });

  var inputEmail = $('#input-email'); 
  var signupButton = $('#signup');
  
  var signupButtonPanel = $('#signup-button-panel');
  
  var success = $('#signup-success');
  var error   = $('#signup-error');
  
  var errorTimer = null;
  
  var successTimer = null;
  
  error.click(function(){
    //speeds up the animation only
    if(errorTimer != null) {
      clearTimeout(errorTimer);
      errorTimer = null;
      fadeOutError();
    }
  });
  
  success.click(function(){
    //speeds up the animation only
    if(successTimer != null) {
      clearTimeout(successTimer);
      successTimer = null;
      fadeOutSuccess();
    }
  });
  
  var els = $('#input-email, #signup');
  
  els.removeAttr('disabled');
  
  inputEmail.keyup(function(e) {
      if(e.which == 13) {
        onSignupTriggered();
        return false;
      }
      
  });
  
  signupButton.click(function(){
    onSignupTriggered();
  });

  function fadeOutError() {
    error.fadeOut(1000, function(){
      $('.signup-els').fadeIn(1000, function(){
        inputEmail.focus();
      });
    });
  }
  
  function fadeOutSuccess() {
    success.fadeOut(1000, function(){
      $('.signup-els').fadeIn(1000, function(){
        inputEmail.focus();
      });
    });
  }

	function onSignupTriggered() {
		
		console.log('signup triggered');
		
		if(inputEmail.attr('disabled') == 'disabled') {
			console.log('in the middle of signup operation')
			return;
		}
		
		//disable 
		els.attr('disabled', 'disabled');
		
		var email = $('#input-email').val()
		mailing_signup(email, function(msg){

			
			$('.signup-els').fadeOut(1000, function(){
			   inputEmail.val('');
         els.removeAttr('disabled');
			   success.fadeIn(1000, function(){
			   
			     if(successTimer != null) {
              clearTimeout(successTimer);
              successTimer = null;
            }
			   
           successTimer = setTimeout(function(){
              fadeOutSuccess();
           }, 5000);
           
         })
			});
			
			
		}, function(status, msg){
			
			$('.signup-els').fadeOut(1000, function(){
        els.removeAttr('disabled');
        error.empty();
        if(status == 'error_already_signed_up') {
          error.append($('<span>',{'class': 'text-warning'}).text('Email already exists: ' + email +'. Enter your email again...'));
          inputEmail.val('');
        } else {
          error.text(msg);
        }
        error.fadeIn(1000, function(){
        
            if(errorTimer != null) {
              clearTimeout(errorTimer);
              errorTimer = null;
            }
          errorTimer = setTimeout(function(){
            fadeOutError();
          }, 5000);
          
        });
        
			});
			
			
		});
	}

});

