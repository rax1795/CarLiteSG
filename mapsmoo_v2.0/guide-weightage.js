// Create new Tour instance
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        classes: 'guide',
        scrollTo: true
    }
});

tour.addStep({
    text: 'Use this page to adjust the weightage of matrices',
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
    text: 'You can edit the weightages of each sub-component. Make sure your input is numeric!',
    attachTo: {
        element: '#s1-1',
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
    text: 'Ensure that total weightages of components sum up to 100%',
    attachTo: {
        element: '#total-weight',
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
    text: 'Click here to apply your changes',
    attachTo: {
        element: '#apply-weightage',
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
    text: 'You can also reset the weightages to default by clicking this button',
    attachTo: {
        element: '#reset-weightage',
        on: 'auto'
    },
    buttons: [
        {
            text: 'Finish',
            action: tour.next
        }
    ]
});