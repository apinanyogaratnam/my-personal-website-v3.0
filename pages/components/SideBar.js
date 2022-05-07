import {
    List,
    ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import styles from '../../styles/SideBar.module.css';

export default function SideBar() {
    const [selected, setSelected] = useState('');

    const tabs = [
        'HOME',
        'PROFILE',
        'RESUME',
        'CONTACT',
    ];

    const handleSelected = (name) => {
        setSelected(name);
    };

    const isSelected = (name) => {
        return selected === name;
    };

    return (
        <List spacing={3}>
            {tabs.map((name, index) => (
                <ListItem key={index} className={styles['side-bar-list-item']} onClick={() => handleSelected(name)}>
                    {isSelected(name) ? <b>{name}</b> : <>{name}</>}
                </ListItem>
            ))}
        </List>
    )
}
