'use strict'
const MINE = '💣';
const FLAG = '🚩'

var gBoard;
var gFirstClick
var gLevel = {
    size: 4,
    mines: 2
}
var gGame = {
    isOff: false,
    shownCount: 0,
    markedCount: 0
}


function init() {
    gBoard = createBoard();
    console.table(gBoard);
    renderBoard(gBoard);
    
    
    function createBoard() {
        var size = gLevel.size;
        var board = [];
        for (var i = 0; i < size; i++) {
            board.push([]);
            for (var j = 0; j < size; j++) {
                board[i][j] = createCell();
                // gWinCounter++
            }
        }
        return board;
    }
    
    
    function renderBoard(board) {
        
        var strHTML = '';
        for (var i = 0; i < board.length; i++) {
            strHTML += '<tr>\n';
            for (var j = 0; j < board[0].length; j++) {
                
                var className = 'cell cell-' + i + '-' + j;
                
                strHTML += '<td class="' + className +
                '" oncontextmenu = markCell(event,' + i + ',' + j +
                ') onclick = cellClicked(this,' + i + ',' + j + ')>'
                //strHTML += ' '
                strHTML += '\t</td>\n';
            }
            strHTML += '</tr>\n';
            var elBoard = document.querySelector('.board');
            elBoard.innerHTML = strHTML;
        }
    }
}

function createCell() {
    var currCell = {
        minesAroundCount: 4,
        isShown: false,
        isMine: false,
        isMarked: false
    }
    console.log(currCell)
    return currCell
}
function cellClicked(elCell, i, j) {
    if (gGame.isOff) return
    if (gBoard[i][j].isShown) return
    if (gFirstClick) {
        gFirstClick = false;
        gTimeBegan = new Date();
        gTimerInterval = setInterval(renderTimer, 10);
    }
gBoard[i][j].isShown = true
var value = ''
if (gBoard[i][j].isMine) value = MINE
else value = gBoard[i][j].minesAroundCount
elCell.innerHTML = value
}
