const picker = document.getElementById('calendar');
picker.addEventListener('input', function(e){
    var day = new Date(this.value).getDay();
    if([0, 2, 4, 5].includes(day)){
        e.preventDefault();
        this.value = '';
        alert('Je kan alleen maandag, woensdag en zaterdag een afspraak inplannen!');
    }
});