var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Venue = new keystone.List('Venue', {
    autokey: { path: 'slug', from: 'name', unique: true },
    map: { name: 'name' },
    defaultSort: 'name'
});
 
Venue.add({
    venueState: { type: Types.Select, options: 'Not opened, Open, Closed', default: 'Open' },
    venueName: { type: String, required: true, label: 'Venue Name', index: true },
    type: { type: Types.Select, options: 'softplay, gardens', required: true, default: 'softplay', index: true },
    address: { type: Types.Location, defaults: { country: 'United Kingdom' }, index: true },
    description: { type: Types.Html, wysiwyg: true, height: 150 },
    rating: { type: Types.Select, numeric: true, options: [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
    ]},
    suitableForAges: { 
        to6M:  { type: Boolean, label: 'Suitable for 0-6m?', index: true },
        from6Mto1Y:  { type: Boolean, label: 'Suitable for 6m-1y?', index: true },
        from1Yto2Y:  { type: Boolean, label: 'Suitable for 1-2y?', index: true },
        from2Yto3Y:  { type: Boolean, label: 'Suitable for 2-3y?', index: true },
        from3Yto4Y:  { type: Boolean, label: 'Suitable for 3-4y?', index: true },
        from4Yto5Y:  { type: Boolean, label: 'Suitable for 4-5y?', index: true },
        from5Yto6Y:  { type: Boolean, label: 'Suitable for 5-6y?', index: true },
        from6Yto7Y:  { type: Boolean, label: 'Suitable for 6-7y?', index: true },
        from7Yto8Y:  { type: Boolean, label: 'Suitable for 7-8y?', index: true },
        from8Yto9Y:  { type: Boolean, label: 'Suitable for 8-9y?', index: true },
        from9Yto10Y:  { type: Boolean, label: 'Suitable for 9-10y?', index: true },
        from10Yto12Y:  { type: Boolean, label: 'Suitable for 10-12y?', index: true },
        from12Y:  { type: Boolean, label: 'Suitable for 12y+?', index: true },   
    },
    bookingRequired: { type: Boolean, label: 'Booking required?' },
    services: { 
        babyChanging: { type: Boolean, label: 'Baby changing available?' },
        childrensMenu: { type: Boolean, label: 'Has a childrens menu?' },
        wheelAccessible: { type: Boolean, label: 'Pram/Wheelchair accessible?' }   
    },
    prices: {
        adult: { type: Types.Money, label: 'Adult price amount (£)', currency: 'en-gb' },
        child: { type: Types.Money, label: 'Child price amount (£)', currency: 'en-gb' },
        infant: { type: Types.Money, label: 'Infant price amount (£)', currency: 'en-gb' },
        otherDescription: { type: String, label: 'Other price description', currency: 'en-gb' },
        other: { type: Types.Money, label: 'Other price amount (£)', currency: 'en-gb' }
    },
    openingHours: {
        monday: {
            isOpen: { type: Boolean, label: 'Open Monday?' },
            open: {
                from: { type: Number, label: 'Monday Open From' },
                to: { type: Number, label: 'Monday Open To' }
            }
        },
        tuesday: {
            isOpen: { type: Boolean, label: 'Open Tuesday?' },
            open: {
                from: { type: Number, label: 'Tuesday Open From' },
                to: { type: Number, label: 'Tuesday Open To' }
            }
        },
        wednesday: {
            isOpen: { type: Boolean, label: 'Open Wednesday?' },
            open: {
                from: { type: Number, label: 'Wednesday Open From' },
                to: { type: Number, label: 'Wednesday Open To' }
            }
        },
        thursday: {
            isOpen: { type: Boolean, label: 'Open Thursday?' },
            open: {
                from: { type: Number, label: 'Thursday Open From' },
                to: { type: Number, label: 'Thursday Open To' }
            }
        },
        friday: {
            isOpen: { type: Boolean, label: 'Open Friday?' },
            open: {
                from: { type: Number, label: 'Friday Open From' },
                to: { type: Number, label: 'Friday Open To' }
            }
        },
        saturday: {
            isOpen: { type: Boolean, label: 'Open Saturday?' },
            open: {
                from: { type: Number, label: 'Saturday Open From' },
                to: { type: Number, label: 'Saturday Open To' }
            }
        },
        sunday: {
            isOpen: { type: Boolean, label: 'Open Sunday?' },
            open: {
                from: { type: Number, label: 'Sunday Open From' },
                to: { type: Number, label: 'Sunday Open To' }
            }
        }
    },
    image: { type: Types.CloudinaryImage },
    state: { type: Types.Select, options: 'Draft, Published, Archived', default: 'Draft' },
    user: { 
        yourName: { type: String, label: "Your name" },
        childName: { type: String, label: "Your child's name" },
        childAge: { type: Number, label: "Your child's age" },
        email: { type: Types.Email, label: "Email" } 
    },
    addedOn: { type: Date, default: Date.now }
});
 
Venue.defaultColumns = 'name, type, state|20%, publishedAt|15%'
Venue.register();