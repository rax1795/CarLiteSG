// Create new Tour instance
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        classes: 'guide',
        scrollTo: true
    }
});

tour.addStep({
    text: 'This is the map, click on the button on the top right corner to toggle layers',
    attachTo: {
        element: '#map',
        on: 'auto'
    },
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
        on: 'auto'
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
        element: '#firstList',
        on: 'auto'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});

tour.addStep({
    text: 'Car-lite scoring will be displayed here when subzones are clicked on the map. For weightage breakdown of matrices, click the matrices button below.',
    attachTo: {
        element: '#sidenav',
        on: 'left'
    },
    buttons: [
        {
            text: 'Finish',
            action: tour.next
        }
    ]
});