import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageLogo from '../assets/img/svg/footer_logo.svg'
const Contact = () => {
    const [btns, setBtns] = useState(1)
    return (
        <section className='bg_darkblue py-5 position-relative rounded-3 overflow-hidden'>
            <Container className=' custom_container mx-auto'>
                <div className="footer_bg_elips d-none d-lg-flex"></div>
                <div className="footer_bg_elips_2 d-none d-lg-flex"></div>
                <Row className='mb-5'>
                    <Col lg={7}>
                        <Row>
                            <Col lg={7} className='p-3 p-lg-0'>
                                <input className='name_input fs_sm fw-semibold w-100' type="text" placeholder='Name' />
                                <input className='mt-2 name_input fs_sm fw-semibold w-100' type="email" placeholder='Email' />
                                <Row>
                                    <Col lg={6} className='d-flex align-items-center pe-lg-1'>
                                        <button className='w-100 mt-2 text_green fs_sm fw-semibold financial_services_btn  position-relative bg-transparent text-nowrap me-xl-1 ps-lg-4'>Financial Service</button>
                                    </Col>
                                    <Col lg={6} className='d-flex align-items-center ps-lg-1'>
                                        <button className='w-110 mt-2 text_green fs_sm fw-semibold real_estate_btn position-relative bg-transparent text-nowrap ms-xl-1'>Real Estate</button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className='px-3 px-lg-0 z_index_5'>
                                <textarea className='msg_textarea w-100 fs_sm fw-semibold ms-lg-3' placeholder='Message..' cols="30" rows="10"></textarea>
                                <button className='bg_green border-0 w-100 submit_btn ms-lg-3'>Submit</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} className='px-3 mt-4 ps-lg-5 z_index_5'>
                        <h4 className='text-white fs_lg fw-semibold ps-lg-5'>Contact us</h4>
                        <p className='fs_sm fw-normal text_darkblack pt-3 ps-lg-5'>Our Predictive Analytics utilize a <span className='d-lg-block'>combination of event-driven data,</span><span className='d-lg-block'> historical data.</span></p>
                    </Col>
                </Row>
                <div className='horizontel_line_footer'></div>
                <Row className='mt-sm-5 pt-5 footer_links'>
                    <Col md={4} className='d-flex flex-column'>
                        <a href="#"><img src={pageLogo} alt="pageLogo" /></a>
                        <a href="mailto:info@catalyzeai.com" className='fs_sm fw-semibold text-white mt-3'>info@catalyzeai.com</a>
                        <a href="tel:+(941) 867-1761" className='fs_sm fw-semibold text-white'>(941) 867-1761</a>
                    </Col>
                    <Col md={8} className='mt-sm-4 mt-md-0'>
                        <Row>
                            <Col sm={4}>
                                <ul className='p-0 m-0'>
                                    <li className='fs_sm fw-semibold text-white'>Financial Services</li>
                                    <li className='mt-4 mt-sm-3 mt-md-4'><a className='fs_sm fw-normal text-white' href="#">Pricing </a></li>
                                    <li className='mt-2'><a className='fs_sm fw-normal text-white' href="#">Blog</a></li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <ul className='p-0 m-0'>
                                    <li className='fs_sm fw-semibold text-white'>Real Estate</li>
                                    <li className='mt-4 mt-sm-3 mt-md-4'><a className='fs_sm fw-normal text-white' href="#">Pricing</a></li>
                                    <li className='mt-2'><a className='fs_sm fw-normal text-white' href="#">Blog</a></li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <p className='fs_sm fw-semibold text-white'>LinkedIn</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='d-lg-flex align-items-center justify-content-between mt-sm-5 pt-3'>
                    <div className='d-sm-flex gap-5'>
                        <p className=' d-inline-block text-nowrap text_lightgrey fw-normal fs_xsm mb-0 footer_links position-relative crusor_pointer'>All rights reserved.©20022 Catalyze AI</p>
                        <span className='ms-sm-5'>
                            <p className='mt-3 mt-sm-0 d-inline-block text-nowrap text_lightgrey fw-normal fs_xsm mb-0 ms-sm-5 footer_links position-relative crusor_pointer'>Do not sell my data</p>
                        </span>
                    </div>
                    <div className="d-sm-flex mt-3 mt-lg-0">
                        <p className=' d-inline-block text-nowrap text_lightgrey fw-normal fs_xsm mb-0 footer_links position-relative crusor_pointer'>Terms & Conditions</p>
                        <span className='ms-sm-5'>
                            <p className=' d-inline-block text-nowrap text_lightgrey fw-normal fs_xsm mb-0 ms-5 footer_links position-relative crusor_pointer'>Privacy Policy</p>
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact