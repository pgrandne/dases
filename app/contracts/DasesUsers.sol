// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;
/// @title An association between public address and entity name/entity contact
/// @author Perrin Grandne
/// @notice This contract list participants from DASES in an array

//The contract inherits from Ownable module of Open Zeppelin
contract DasesUsers {
    //This declares a structure type, which will be used as structure of the array with the list of entities
    struct Participant {
        address publicKey; // It is the address of the entity who wants to be added
        string userName; // It is the name of the entity
        string entityName; // It is a contact address of the Entity
    }

    Participant[] public listOfParticipants; //Array which list these entites, based on Entities struct

    //Store the address and informations associated
    constructor() {
        listOfParticipants.push(
            Participant(
                0x3EF2d0e07cAb0524771c02c455Dc891560C77462,
                "Pierre FONTAINE",
                "IMT Atlantique"
                )
        );
        listOfParticipants.push(
            Participant(
                0x847043871DBDE2D6e9EC961c93AeB42a9b536813,
                "Frank DENIS",
                "Orange Business Services"
                )
        );
        listOfParticipants.push(
            Participant(0xF27Ed7aCebb4B3065D24F4B4B4daaf20766C0376, 
            "Pierre PETIT", 
            "DASES"
        )
        );
    }

 
    //Collect the list of Entities
    function getParticipantsList()
        public
        view
        returns (Participant[] memory)
    {
        return listOfParticipants;
    }
}
