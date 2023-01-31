import React, { useState } from 'react';
import Products from './../../assets/Json/detalle.json'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Content.css'

function Content() {
    // eslint-disable-next-line
    const [data, setData] = useState(Products.products[0]);

    return (
        <div className='content'>
            <div className='image'>
                <img src={data.productimage} width={'80%'} alt='Imagen Producto' />
            </div>
            <div className='description'>
                <div className='brand'>
                    <h3 >{data.brand}</h3>
                    <p style={{ color: '#999999' }}>{data.productname}</p>
                    <p><span style={{ color: '#999999' }}>Vendido y entregado:</span> <span style={{ color: '#29B6AD' }}>{data.brand}</span></p>
                </div>
                <div>
                    <FavoriteBorderOutlinedIcon fontSize="large" sx={{ color: '#999999' }} />
                </div>
            </div>
            <Divider variant="middle" />
            <div className="talle">
                <h4>TALLE</h4>
            </div>
            <Stack direction="row" sx={{ justifyContent: 'center' }}>
                {data.sizes.map((size) => (
                    size.quantity <= 0 ? (
                        <IconButton disabled key={size.id} color="#29B6AD">
                            <Avatar >{size.size}</Avatar>
                        </IconButton>) : (
                        <IconButton key={size.id}>
                            <Avatar sx={{ bgcolor: '#29B6AD' }}>{size.size}</Avatar>
                        </IconButton>
                    )

                ))}
            </Stack>
            <div className="icons">
                <FacebookOutlinedIcon sx={{ color: "#999999" }} />
                <TwitterIcon sx={{ color: "#999999" }} />
                <WhatsAppIcon sx={{ color: "#999999" }} />
            </div>
            <div className="details">
                <Accordion expanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h4>DESCRIPCIÓN</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                Material Exterior: {data.uppermaterial}
                            </li>
                            <li>
                                Color: {data.color}
                            </li>
                            <li>
                                Código Artículo: {data.id}
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <h4>DETALLE DEL PRODUCTO</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            <li>
                                Material Exterior: {data.uppermaterial}
                            </li>
                            <li>
                                Color: {data.color}
                            </li>
                            <li>
                                Código Artículo: {data.id}
                            </li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div >
    )
}

export default Content