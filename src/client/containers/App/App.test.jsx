import React from 'react';
import renderer from 'react-test-renderer';
var AppLayout = require('./App')


test('Create app page snapshot', () => {
    const component = renderer.create(AppLayout);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

