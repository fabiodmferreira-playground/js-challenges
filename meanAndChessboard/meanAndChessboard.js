function getCellPosition(matrix,i,startPosition){
    const values = [];

    for(let i=0;i<matrix[0].length;i++){
        let start = startPosition(i)
        for(let j=start;j<matrix[0].length;j+=2){
            values.push([i,j,matrix[i][j]]);
        }
    }

    const valuesSorted = values.map(p=>p[2]).sort((a,b)=>a-b);

    let ithValue = valuesSorted[i];

    const p = values.find(p=>p[2] == ithValue)

    return [p[0],p[1]];
}

function getBlack(matrix,i){
    return getCellPosition(matrix, i, i=>i % 2 == 0?1:0)
}

function getWhite(matrix,i){
    return getCellPosition(matrix, i, i=>i % 2 == 0?0:1)
}


module.exports = function meanAndChessboard(matrix, queries) {

    for(let i=0;i<queries.length;i++){
        const query = queries[i];

        const cellI = getBlack(matrix,query[0]);
        const cellJ = getWhite(matrix,query[1]);

        const cellIValue = matrix[cellI[0]][cellI[1]];
        const cellJValue = matrix[cellJ[0]][cellJ[1]]

        const avg = (cellIValue + cellJValue)/2;

        if(avg%1 == 0){
            matrix[cellI[0]][cellI[1]] = avg;
            matrix[cellJ[0]][cellJ[1]] = avg;
        } else {
            if(cellIValue > cellJValue){
                matrix[cellI[0]][cellI[1]] = Math.ceil(avg);
                matrix[cellJ[0]][cellJ[1]] = Math.floor(avg);
            } else {
                matrix[cellI[0]][cellI[1]] = Math.floor(avg);
                matrix[cellJ[0]][cellJ[1]] = Math.ceil(avg);
            }
        }
    }

    return matrix;
}
