// Create new Tour instance
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        classes: 'guide',
        scrollTo: true
    }
});

tour.addStep({
    text: 'Use this page to compare between 2 neighbourhoods',
    // attachTo: {
    //     element: '#map',
    //     on: 'auto'
    // },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'Click here to expand the menu and navigate elsewhere',
    attachTo: {
        element: '#sidemenu',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'This is the map, click on the button on the top right corner to toggle layers',
    attachTo: {
        element: '#map',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'Use this menu to zoom to particular subzones',
    attachTo: {
        element: '#select-compare',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'This is another map, which you can use to navigate to another subzone for comparison',
    attachTo: {
        element: '#map2',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'Car-lite scoring will be displayed here when subzones are clicked on the map',
    attachTo: {
        element: '#metrictable',
        on: 'left'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'Car-lite scoring can be compared with that of another subzone. Click the matrices button to view current matrices weightages.',
    attachTo: {
        element: '#metrictable2',
        on: 'right'
    },
    buttons: [
        {
            text: 'Finish',
            action: tour.next
        }
    ]
});