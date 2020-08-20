const mainDiv = document.querySelector(`div[data-div=main]`);
const reset = document.querySelector(`button[data-button=reset]`);
const set = document.querySelector(`button[data-button=set]`);
const widthInput = document.querySelector(`input[data-input=width]`);
const heightInput = document.querySelector(`input[data-input=height]`);

console.log(widthInput.valueAsNumber);
function effect(element)
{
    this.classList.add('hoverFun');
}

function makeGrid()
{
    if(widthInput.valueAsNumber>78) 
        widthInput.valueAsNumber = 78;
    if(heightInput.valueAsNumber>78) 
        heightInput.valueAsNumber = 78;

    for(let i=0; i<widthInput.valueAsNumber*heightInput.valueAsNumber;i++)
    {
        let newDiv = document.createElement('div');
        console.log(newDiv);
        newDiv.classList.add('smollDiv');
        newDiv.addEventListener('mouseover',effect);
        mainDiv.appendChild(newDiv);   
    }
    //console.log(`repeat(${heightInput.valueAsNumber}, 1fr)`);
    mainDiv.style.gridTemplateColumns = `repeat(${widthInput.valueAsNumber}, 1fr)`;//'repeat('+widthInput.valueAsNumber+', 1fr)';
    mainDiv.style.gridTemplateRows = `repeat(${heightInput.valueAsNumber}, 1fr)`;
    console.log(mainDiv);
}  
function deleteGrid()
{
    const allDiv = document.querySelectorAll('.smollDiv');
    allDiv.forEach( element => mainDiv.removeChild(element));
    makeGrid();
}
function resetGrid()
{
    const allDiv = document.querySelectorAll('.smollDiv')
    allDiv.forEach(element => element.classList.remove('hoverFun'));
    
}
function addStyle()
{
    this.style.opacity = '50%';
}
function removeStyle()
{
    this.style.opacity = '100%';
}

reset.addEventListener('click', resetGrid);
set.addEventListener('click', deleteGrid);
reset.addEventListener('mouseover', addStyle);
reset.addEventListener('mouseleave', removeStyle);
set.addEventListener('mouseover', addStyle);
set.addEventListener('mouseleave', removeStyle);
makeGrid();