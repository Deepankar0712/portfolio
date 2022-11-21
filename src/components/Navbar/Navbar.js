import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/png/Deepankar.png'

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.secondary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.browny,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
                marginTop: '1rem',
            },
        },
        imageLogo: {
            height: '200px',
            objectFit: 'contain',
            [t.breakpoints.down('xs')]: {
                height: '120px',
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '17em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.browny,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.browny,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.browny,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.browny,
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                {/* <h1 style={{ color: theme.secondary }}>
                    {shortname(headerData.name)}
                </h1> */}
                <img src={logo} className={classes.imageLogo} />

                <IoMenuSharp
                    className={classes.navMenu}
                    onClick={handleDrawerOpen}
                    aria-label='Menu'
                />
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Home
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        About
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <a
                                href='https://drive.google.com/file/d/1vNi6Fsh1Jnbft-E5dyVo9tQt5HIbs2L0/view'
                                smooth={true}
                                spy='true'
                                target="_blank"
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Resume
                                    </span>
                                </div>
                            </a>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#education'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Education
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#blog'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Achievements
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        Contact
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
