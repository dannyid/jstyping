
var letters = {
    32: [" "," "],
    48: ["0",")"],
    49: ["1","!"],
    50: ["2","@"],
    51: ["3","#"],
    52: ["4","$"],
    53: ["5","%"],
    54: ["6","^"],
    55: ["7","&"],
    56: ["8","*"],
    57: ["9","("],
    65: ["a","A"],
    66: ["b","B"],
    67: ["c","C"],
    68: ["d","D"],
    69: ["e","E"],
    70: ["f","F"],
    71: ["g","G"],
    72: ["h","H"],
    73: ["i","I"],
    74: ["j","J"],
    75: ["k","K"],
    76: ["l","L"],
    77: ["m","M"],
    78: ["n","N"],
    79: ["o","O"],
    80: ["p","P"],
    81: ["q","Q"],
    82: ["r","R"],
    83: ["s","S"],
    84: ["t","T"],
    85: ["u","U"],
    86: ["v","V"],
    87: ["w","W"],
    88: ["x","X"],
    89: ["y","Y"],
    90: ["z","Z"],
    96: ["0","0"],
    97: ["1","1"],
    98: ["2","2"],
    99: ["3","3"],
    100: ["4","4"],
    101: ["5","5"],
    102: ["6","6"],
    103: ["7","7"],
    104: ["8","8"],
    105: ["9","9"],
    106: ["*","*"],
    107: ["+","+"],
    109: ["-","-"],
    110: [".","."],
    111: ["/","/"],
    186: [";",":"],
    187: ["=","+"],
    188: [",","<"],
    189: ["-","_"],
    190: [".",">"],
    191: ["/","?"],
    192: ["`","~"],
    219: ["[","{"],
    220: ["\\","|"],
    221: ["]","}"],
    222: ["'",'"']
}

function insertLetter( currentDiv, currentLetter, shift ) {
    if (event.keyCode === 13) {
        currentDiv.append( "<br>" );
    } else if (event.keyCode === 8) {
        event.preventDefault();
        currentDiv.html( currentDiv.html().slice(0,-1) );
    } else {
        currentDiv.append( currentLetter[shift] );
    };
};

$( "body" ).keydown(function( event ) {
        currentDiv = $( "body > div:last-of-type" ); 
        var currentLetter = letters[ event.keyCode ];
        console.log( event );
        console.log( currentDiv.html() );
                    
        insertLetter( currentDiv, currentLetter, event.shiftKey === false? 0 : 1 );

});
