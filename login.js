var typed = new Typed("#element1", {
    strings: ["<h2>LOGIN</h2>"],
    typeSpeed: 0,
    showCursor: false,
    onComplete: function () {
        var typed = new Typed("#element2", {
            strings: ["Email or Mobile:"],
            typeSpeed: 10,
            showCursor: false,
            onComplete: function () {
                var typed = new Typed("#element3", {
                    strings: ["Password:"],
                    typeSpeed: 10,
                    showCursor: false,
                    onComplete: function () {
                        var typed = new Typed("#element4", {
                            strings: ["Forgot Password?"],
                            typeSpeed: 10,
                            showCursor: false,
                            onComplete: function () {
                                var typed = new Typed("#element5", {
                                    strings: ["Don't have an account?"],
                                    typeSpeed: 10,
                                    showCursor: false,
                                    onComplete: function () {
                                        var typed = new Typed("#element6", {
                                            strings: ["Sign Up"],
                                            typeSpeed: 10,
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});