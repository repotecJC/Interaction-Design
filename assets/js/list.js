// animation
var GuideContainer = document.getElementById('Guide-container');
var Select_area = document.getElementById('Select_area');
// close in the first place
var isExpanded = false;

// click event
GuideContainer.addEventListener('click', function() {
    // expanded if
    if (isExpanded) {
        GuideContainer.style.height = '50px'; // 30px when list closed
        Select_area.style.top = parseInt(GuideContainer.style.height) + 30 +'px';
    } else {
        // expand the list regarding to the content
        GuideContainer.style.height = GuideContainer.scrollHeight + 'px';
        Select_area.style.top = parseInt(GuideContainer.style.height) + 30 +'px';
    }
    // update expanded
    isExpanded = !isExpanded;
});


// list setting
var select_value = document.getElementById('Select');

// check the change
select_value.addEventListener('change', function() {
    // get user click value
    var selectedValue = select_value.value;

    var link_list = {
        S : 'https://maps.app.goo.gl/rZtdZXR4no9G9dGq6',
        B : 'https://maps.app.goo.gl/5KadNmvjteqYsLhR8',
        C : 'https://maps.app.goo.gl/5KadNmvjteqYsLhR8',
        A : 'https://maps.app.goo.gl/qBA6u5bqnyUcYKJRA',
        L : 'https://maps.app.goo.gl/qBA6u5bqnyUcYKJRA',
        K : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        J : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        H : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        G : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        M : 'https://maps.app.goo.gl/vN3UpjzLcvgo6Dyz5',
        F : 'https://maps.app.goo.gl/h6xhUNXFLmVb7uxE7',
        E : 'https://maps.app.goo.gl/UiddKZ7yzr4MR1x16',
        D : 'https://maps.app.goo.gl/hyvfYcq5bgsJdkAF7',
        N : 'https://maps.app.goo.gl/3Cqpc1kKvEYxTsVH7',
        Z : 'https://maps.app.goo.gl/7pzTBLfuJbYtTtucA',
        X : 'https://maps.app.goo.gl/u7qz497m2ZPPNeAK8',
        U : 'https://maps.app.goo.gl/anizof2whbwsvEK86',
        W : 'https://maps.app.goo.gl/7Lobq7Wkuf6eydKXA',
        T : 'https://maps.app.goo.gl/ab86gDfscBkinN5i6',
        P : 'https://maps.app.goo.gl/nJXsjsJCT2aqoY2g7',
        Q : 'https://maps.app.goo.gl/nJXsjsJCT2aqoY2g7',
        R : 'https://maps.app.goo.gl/X2Ah76BjjxZFcESA9'
    };
    
    // check the value in list
    if (selectedValue in link_list) {
        // open the google maps
        window.location.href = link_list[selectedValue];
    }
});