function add()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    ans = num1 + num2
    document.getElementById('res').innerHTML = `<p style="color: red; font-size: 20px;">${ans}</p>`;
}

function sub()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    ans = num1-num2;
    document.getElementById('res').innerHTML = `<p style="color: red; font-size: 20px;">${ans}</p>`;
}

function mult()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    ans = num1 * num2;
    document.getElementById('res').innerHTML = `<p style="color: red; font-size: 20px;">${ans}</p>`;
}

function div()
{
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    ans = num1 / num2;
    document.getElementById('res').innerHTML = `<p style="color: red; font-size: 20px;">${ans}</p>`;
}