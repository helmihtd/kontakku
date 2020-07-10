import React from 'react';
import Card from './Card';

const CardList = ({ kontak }) => {
    return (
        <div>
            {
                kontak.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={kontak[i].id} 
                        name={kontak[i].name} 
                        email={kontak[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;