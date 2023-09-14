// Lexical Scope

function outer() {
    let movie = "Amadeus";                      // Variable movie is only accessible within the function outer()
 
    function inner() {
        let movie = "The Shinning";             // Variable movie is different from the previously declared of the same name

        function extraInner() {
            console.log(movie.toUpperCase());   // The function inner() has access to the variable movie defined w/in function outer()
        }

        extraInner()                            // Can ONLY be called within the function inner()
    }

    inner();                                    // Can ONLY be called within the function outer()
}

outer();
