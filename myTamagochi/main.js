function setStatsEasy() {
    const min = 50;
    const max = 100;
    food = Math.floor((Math.random() * (max - min + 1)) + min);
    clean = Math.floor((Math.random() * (max - min + 1)) + min);
    happiness = Math.floor((Math.random() * (max - min + 1)) + min);
    health = Math.floor((Math.random() * (max - min + 1)) + min);
    socialization = Math.floor((Math.random() * (max - min + 1)) + min);
    money = Math.floor((Math.random() * (max - min + 1)) + min);
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    document.getElementById("valueSocialization").innerHTML = socialization;
}

function setStatsHard() {
    const min = 50;
    const max = 70;
    food = Math.floor((Math.random() * (max - min + 1)) + min);
    clean = Math.floor((Math.random() * (max - min + 1)) + min);
    happiness = Math.floor((Math.random() * (max - min + 1)) + min);
    health = Math.floor((Math.random() * (max - min + 1)) + min);
    socialization = Math.floor((Math.random() * (max - min + 1)) + min);
    money = Math.floor((Math.random() * (max - min + 1)) + min);
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    document.getElementById("valueSocialization").innerHTML = socialization;
}

function startEasy() {
    timerId = setInterval(() => {
        food = food - 3;
        clean = clean - 3;
        happiness = happiness - 3;
        health = health - 3;
        money = money - 3;
        socialization = socialization - 3;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
        document.getElementById("valueHealth").innerHTML = health;
        document.getElementById("valueMoney").innerHTML = money;
        document.getElementById("valueSocialization").innerHTML = socialization;
        stop();
    }, 5000)
}

function startHard() {
    timerId = setInterval(() => {
        food = food - 5;
        clean = clean - 5;
        happiness = happiness - 5;
        health = health - 5;
        money = money - 5;
        socialization = socialization - 5;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
        document.getElementById("valueHealth").innerHTML = health;
        document.getElementById("valueMoney").innerHTML = money;
        document.getElementById("valueSocialization").innerHTML = socialization;
        stop();
    }, 5000) 
}

function startVeryHard() {
    timerId = setInterval(() => {
        food = food - 7;
        clean = clean - 7;
        happiness = happiness - 7;
        health = health - 7;
        money = money - 7;
        socialization = socialization - 7;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
        document.getElementById("valueHealth").innerHTML = health;
        document.getElementById("valueMoney").innerHTML = money;
        document.getElementById("valueSocialization").innerHTML = socialization;
        stop();
    }, 7000) 
}

function lifeTime() {
    let time = 0;
    life = setInterval(() => {
        time++;
        document.getElementById("valueTime").innerHTML = time + ' sec.';
    }, 1000);
}

function stop() {
    if (food <= 0 || happiness <= 0 || clean <= 0 || health <= 0 || money <= 0 || socialization <= 0) {
        clearInterval(timerId);
        alert("Game over!");
        clearInterval(life);
    }
    document.getElementById("restart").addEventListener('click', function() {
        window.location.reload();
    });
}

function start() {
    if (select.selectedIndex === 0) {
        index = 0;
        setStatsEasy();
        startEasy();
        document.getElementById("valuePet").innerHTML = select.value;
        eat(index);
        run(index);
        wash(index);
     } else if (select.selectedIndex === 1) {
        index = 1;
        setStatsHard();
        startHard();
        document.getElementById("valuePet").innerHTML = select.value;
        eat(index);
        run(index);
        wash(index);
    } else if (select.selectedIndex === 2) {
        index = 2;
        setStatsHard();
        startVeryHard();
        document.getElementById("valuePet").innerHTML = select.value;
        eat(index);
        run(index);
        wash(index);
    }
    lifeTime();
    help();
}

function eat() {
    if (index === 0) {
        if (food <= 70) {
            food = food + 30;
        } else {
            food = 100;
        }
    } else if (index === 1) {
        if (food <= 40) {
            food = food + 30;
        } else {
            food = 70;
        }
    } else if (index === 2) {
        food = food + 30;
    }
    clean = clean - 20;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
    stop();
}

function wash() {
    if (index === 0) {
        if (clean <= 60) {
            clean = clean + 40;
        } else {
            clean = 100;
        }
    } else if (index === 1) {
        if (clean <= 30) {
            clean = clean + 40;
        } else {
            clean = 70;
        }
    } else if (index === 2) {
        clean = clean + 40;
    }
    happiness = happiness - 20;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
    stop();
}

function run() {
    if (index === 0) {
        if (happiness <= 70) {
            happiness = happiness + 30;
        } else {
            happiness = 100;
        }
    } else if (index === 1) {
        if (happiness <= 40) {
            happiness = happiness + 30;
        } else {
            happiness = 70;
        }
    } else if (index === 2) {
        happiness = happiness + 30;
    }
    food =food - 10;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueFood").innerHTML = food;
    stop();
}

function visitDoctor() {
    health = health + 30;
    money = money - 10;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    stop();
};

function goToBar() {
    food = food + 10;
    socialization = socialization + 40;
    health = health - 10;
    money = money - 20;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    document.getElementById("valueSocialization").innerHTML = socialization;
    stop();
};

function goToWork() {
    food = food - 10;
    socialization = socialization - 20;
    health = health - 10;
    money = money + 50;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    document.getElementById("valueSocialization").innerHTML = socialization;
    stop();
};

function buyFood() {
    food = food + 20;
    money = money - 20;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueMoney").innerHTML = money;
    stop();
};

function startBusiness() {
    happiness = happiness + 100;
    socialization = socialization + 20;
    health = health - 100;
    money = money + 100;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueHealth").innerHTML = health;
    document.getElementById("valueMoney").innerHTML = money;
    document.getElementById("valueSocialization").innerHTML = socialization;
    stop();
};

function help() {
    timerHelp = setInterval(() => {
        const min = 50;
        const max = 100;
        random = Math.floor((Math.random() * (max - min + 1)) + min);
        
    }, 60000);
}