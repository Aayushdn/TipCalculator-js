formElement = document.querySelector('.FormCalculator');
ResultFeild = document.querySelector('.Result');
TipAmt = document.querySelector('.tipAmt');


function calculate(e){
    e.preventDefault();
    const billAmt = (this.querySelector('[name=BillAmount]')).value;
    const qlitSev = (this.querySelector('input[type=range]')).value;
    const TipPercent  = (this.querySelector('[name=TipPercent]')).value;
    const PeopleQty =  (this.querySelector('[name=NoOfPeople]')).value;
    const Rounding = (this.querySelector('#roundCheck')).value;
    if (qlitSev < 40){
        var TipReduction = 2;
    }
    else if (qlitSev < 80 && qlitSev > 40){
        var TipReduction = 1
    }
    else if (qlitSev > 80){
        var TipReduction = 0
    }

    ActualTipPercent = TipPercent - TipReduction
    ActuaTip = (ActualTipPercent/100 * billAmt) / PeopleQty
    if (Rounding == 'on'){
        ActuaTip = parseInt(ActuaTip);
    }
    DisplayTip(ActuaTip)
    
}

function DisplayTip(Tip){
    ResultFeild.classList.add('DisplayVisible')
    
    TipAmt.innerHTML = Tip
}





formElement.addEventListener('submit', calculate)