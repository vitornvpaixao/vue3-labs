"use strict";
// Enums
// Lets imagina an error manager function scenario
// the error can be an unauthorized, user doesn't exist, wrong credentials, internal erros, etc
// We want to define a set of constants for all the different types of errors that they can be
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NosUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log('User not authorized');
    }
    else if (error == LoginError.NosUser) {
        console.log('No user was found with that username');
    }
    else if (error == LoginError.WrongCredentials) {
        console.log('Wrong username/password combination');
    }
    else {
        console.log('Internal Error');
    }
    // switch (error) {
    // 	case LoginError.Unauthorized:
    // 		console.log('User not authorized');
    // 		break;
    // 	case LoginError.NosUser:
    // 		console.log('No user was found with that username');
    // 		break;
    // 	case LoginError.WrongCredentials:
    // 		console.log('Wrong username/password combination');
    // 		break;
    // 	case LoginError.Internal:
    // 		console.log('Internal Error');
    // 		break;
    // 	default:
    // 		break;
    // }
};
printErrorMsg(LoginError.Internal);
