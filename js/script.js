// =========== Dom part start =========
// =========== player one dom
let playerOne          =      document.querySelector('.playerOne')
let playerOneInput     =      document.querySelector('.playerOneInput')
let playerOneButton    =      document.querySelector('.playerOneButton')

// ========== player two dom
let playerTwo          =      document.querySelector('.playerTwo')
let playerTwoInput     =      document.querySelector('.playerTwoInput')
let playerTwoButton    =      document.querySelector('.playerTwoButton')

// =========== player three dom
let playerThree        =      document.querySelector('.playerThree')
let playerThreeInput   =      document.querySelector('.playerThreeInput')
let playerThreeButton  =      document.querySelector('.playerThreeButton')

// =========== Others dom 
let playerName         =      document.querySelectorAll('.playerName')
let error              =      document.querySelector('.error')
let winner             =      document.querySelector('.winner')
let result             =      document.querySelector('.result')
let chanceNumber       =      document.querySelector('.chanceNumber')
let chanceNumberThree  =      document.querySelector('.chanceNumberThree')
let chance             =      5
let chanceCount        =      document.querySelector('.chanceCount')


// =========== Function part start
    chanceNumber.innerHTML = chance
    chanceNumberThree.innerHTML = chance

    //  ============Player one function

    playerOneButton.addEventListener('click', ()=>{
        
        if(playerOneInput.value == ''){
            error.innerHTML        =  'Please Enter an input !'
        }else{
            error.innerHTML        =  ''
            if(playerOneInput.value > 10 || playerOneInput.value < 0){
                error.innerHTML    =    'Please Enter Number between 0 to 10.'
            }else{
                error.innerHTML       = ''
                playerOne.style       = 'display:none'
                playerTwo.style       = 'display:block'

            }
        }
        // console.log(playerOneInput.value)
        // Here Player one value stored. That is why we take player 2 from here
        playerTwoButton.addEventListener('click', ()=>{
            
            if(playerTwoInput.value  == ''){
                error.innerHTML      = "Please Enter an Input!!!"
            }else{
                error.innerHTML      = ""
                if(playerTwoInput.value > 10 || playerTwoInput.value < 0){
                    error.innerHTML  = 'Guess Number between 0 to 10'
                }else{
                    
                    if(playerTwoInput.value == playerOneInput.value){
                        error.innerHTML  = ""
                        playerTwoInput.value = ''
                        winner.style = 'display:block'
                        result.innerHTML = 'Winner is Player - 2'
                        playerTwo.style = 'display: none'
                    
                    }else{
                        chance--
                        chanceNumber.innerHTML = chance
                        if(chance ==0){
                            
                            playerTwoInput.value = ''
                            playerTwo.style      = 'display:none'
                            playerThree.style    = 'display:block'
                            chance += 5
                            
                            playerThreeButton.addEventListener('click', ()=>{
                                // chanceNumberThree.innerHTML = chance
                                if(playerThreeInput.value == ''){
                                    error.innerHTML = "Please Enter an input!!!"
                                }else{
                                    error.innerHTML = ""
                                    if(playerThreeInput.value > 10 || playerThreeInput.value < 0){
                                        error.innerHTML = "Guess Number between 0 to 10"
                                    }else{
                                        error.innerHTML = ""
                                        if(playerThreeInput.value == playerOneInput.value){
                                            playerThreeInput.value = ''
                                            winner.style = 'display:block'
                                            result.innerHTML = 'Winner is Player - 3'
                                            playerThree.style = 'display: none'

                                        }else{
                                            chance--
                                            chanceNumberThree.innerHTML = chance
                                            if(chance == 0){
                                                playerTwoInput.value = ''
                                                playerThree.style    = 'display:none'
                                                winner.style = 'display:block'
                                                result.innerHTML = 'Winner is Player - 1'

                                            }
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            }
        })

    })
