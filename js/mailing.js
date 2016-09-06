//global variable

var APP_ID = 'haley-dev';

var ENDPOINT = 'endpoint.' + APP_ID;


var vitalservice = null;

var EVENTBUS_URL ='https://haley-ai-login.vital.ai/eventbus';

if(window.location.hostname.startsWith('dev.')) {

	APP_ID = 'haley';
	ENDPOINT = 'endpoint.' + APP_ID;
	
	EVENTBUS_URL = 'http://dev.haley.vital.ai/eventbus';
	
}


console.log('evenbus url: ', EVENTBUS_URL);

$(function(){
	
	console.log("instantiating service...");
	
	vitalservice = new VitalService(ENDPOINT, EVENTBUS_URL, function(){
		
		console.log('connected to endpoint');
	
		onVitalServiceReady();
			
	}, function(err){
		console.error('couldn\'t connect to endpoint -' + err);
	});
	
});



var onVitalServiceReady = function() {

};


function mailing_signup(email, successCallback, errorCallback) {
	
	console.log('signing up, email', email)
	
	vitalservice.callFunction('mailing.haley.signup', {email: email}, function(result) {
		
		console.log('haley.mailing.signup result: ', result)
		
		successCallback(result.status.message);
		
	}, function(error) {
		
		var status = 'error_unknown';
		
		var msg = 'no error message';
		
		if(error.indexOf('error_') == 0) {
			
			var split = error.split(/\s+/);
			
			status = split[0]
			
			if(split.length > 1) {
				split.splice(0, 1);
				msg = split.join(' ');
			}
			
		} else {
			msg = error;
		}
		
		errorCallback(status, msg);
		
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

