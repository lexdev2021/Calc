function Calc(iden, a, b) {

    if (iden === '' 
    || a === '' 
    || b === '' 
    || isNaN(a)
    || isNaN(b))  {
        alert('Error'); 
    } else {
        switch (iden) {
            case 'sum':
                alert(a + b);
                break;
            case 'sub':
                alert(a - b);
                break; 
            case 'multi':
                alert(a * b);
                break;
            case 'div':
                alert(a / b);
                break;
            case 'rem':
                alert(a % b);
                break;
            case 'pow':
                alert(a ** b);
                break;
            default:
                alert('Unknown operation');              
        }
    }   
}
Calc('sub', 6, 2);
Calc('gthjjh', 9, 1);
Calc('sum', 'asd', 1); 
Calc('a', 28); 
Calc('sdf');



