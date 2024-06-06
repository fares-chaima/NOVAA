import React, { useEffect, useState } from 'react';

const EtatCell = ({ row }) => {
    const [etatInfo, setEtatInfo] = useState({ text: '', color: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/bci/${row.id}/etat`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setEtatInfo(data);
            } catch (error) {
                console.error('Error fetching etat:', error);
                setEtatInfo({ text: 'Error', color: 'red' }); // Affiche une erreur dans l'état
            }
        };
        fetchData();
    }, [row.id]);

    return (
        <input
            type="text"
            value={etatInfo.text}
            style={{
                backgroundColor: etatInfo.color,
                borderRadius: '30px',
                width: '100px',
                textAlign: 'center',
                color: 'black',
                height: '30px'
            }}
            disabled
        />
    );
};

export default EtatCell;
