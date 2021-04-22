import React from 'react';

export const Game = ({gameProps}) => (
    <div>
        <h3> {gameProps.name} </h3>
        <h3> {gameProps.console} </h3>
        <h3> {gameProps.createdBy} </h3>
    </div>
);