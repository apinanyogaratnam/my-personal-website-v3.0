import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SideBar from '././components/SideBar';
import theme from '../theme';
import { Button, Divider, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
    const sideButtons = [
        'HOME',
        'PROFILE',
        'RESUME',
        'CONTACT',
    ]

    const [selected, setSelected] = useState('HOME');

    const handleSelected = (name) => {
        setSelected(name);
    }

    return (
        <div>
            <Head>
                <title>Apinan Yogaratnam</title>
                <meta name="description" content="Apinan Yogaratnam's Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id='global-container' style={{
                backgroundColor: 'steelblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div id='left-third' style={{
                    backgroundColor: 'darkblue',
                    minHeight: '800px',
                    height: '100%',
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                }}>
                <Text fontSize='5xl' fontWeight='bold' color={'white'}>
                    <h1>Apinan Yogaratnam</h1>
                </Text>
                <Stack style={{
                    width: '80%',
                    margin: 'auto',
                }}>
                    {
                        sideButtons.map((name, index) => (
                            <Button key={index} colorScheme='teal' size='sm' onClick={() => handleSelected(name)}>{name}</Button>
                        ))
                    }
                </Stack>
                </div>
                {selected === 'HOME' ? (
                    <div id='right-third' style={{
                        backgroundColor: 'blue',
                        width: '70%',
                        minHeight: '800px',
                    }}>
                        <p style={{color: 'white'}}>
                            <h1>{`Hello, I'm Apinan Yogaratnam`}</h1>
                            A full-stack web developer with a background in mathematics.

                        </p>
                    </div>) : null}
                {selected === 'PROFILE' ? (
                    <div id='right-third' style={{
                        backgroundColor: 'blue',
                        width: '70%',
                        minHeight: '800px',
                    }}>

                    </div>) : null}
                {selected === 'RESUME' ? (
                    <div id='right-third' style={{
                        backgroundColor: 'blue',
                        width: '70%',
                        minHeight: '800px',
                    }}>
                        <h4>{`Here's my resume`}</h4>
                        <a href='www.google.com'>
                            <Button size='lg' variantColor='teal'>
                                Download Resume
                            </Button>
                        </a>
                    </div>) : null}
                {selected === 'CONTACT' ? (
                    <div id='right-third' style={{
                        backgroundColor: 'blue',
                        width: '70%',
                        minHeight: '800px',
                    }}>

                    </div>) : null}
            </div>
        </div>
    );
}
