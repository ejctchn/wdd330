function getAnswer()
{
    let f = parseFloat(document.getElementById('first').value);
    let s = parseFloat(document.getElementById('second').value);
    let o = document.getElementById('operand').value;
    let final = 0;

    switch(o)
    {
        case '+':
            final = f + s;
            break;
        case '-':
            final = f - s;
            break;
        case '/':
            final = f / s;
            break;
        case 'x':
            final = f * s;
            break;
        default:
            alert("Please select an operator.")
            break;
    }

    document.getElementById('answer').innerHTML = `Answer: ${final}`;
}