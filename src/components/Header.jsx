import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerCard from '../assets/img/svg/header_card.svg'
import profileIcon from '../assets/img/svg/profile_icon.svg'
import threeDot from '../assets/img/svg/three_dot.svg'
import arrow from '../assets/img/svg/down_arrow.svg'
import activLead from '../assets/img/svg/active_lead.svg'
import arroww from '../assets/img/svg/btns_arrow.svg'
const Header = () => {
    return (
        <section className='py-5 position-relative overflow-hidden'>
            <div className="header_position_box d-none d-lg-flex"></div>
            <div className="header_position_box_2 d-none d-lg-flex"></div>
            <Container className='custom_container my-5'>
                <Row className='py-5'>
                    <Col lg={6} className='position-relative mt-lg-5 header_coulmn_height'>
                        {/***********CARD-1*******************/}
                        <span className="bg-white d-inline-block px-4 py-2 rounded-3 header_card_1">
                            <div className="d-flex ms-5">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.93965 0.282689C4.61928 -0.607002 1.17468 1.38174 0.284992 4.70211C-0.604699 8.02248 1.38404 11.4671 4.70441 12.3568C8.02478 13.2465 11.4694 11.2577 12.3591 7.93734C13.2488 4.61697 11.26 1.17238 7.93965 0.282689ZM5.02793 11.1494C2.3656 10.436 0.779029 7.68796 1.4924 5.02563C2.20577 2.3633 4.95379 0.776726 7.61612 1.4901C10.2785 2.20347 11.865 4.95149 11.1517 7.61382C10.4383 10.2762 7.69027 11.8627 5.02793 11.1494ZM7.43269 3.38209L6.52713 3.13944L5.55656 6.76167L8.17818 9.53468L8.87144 8.87927L6.59153 6.52135L7.43269 3.38209Z" fill="#FFA140" />
                                </svg>
                                <p className='fs_8 fw-normal mb-0 ms-1 text-nowrap'>2 days ago</p>
                            </div>
                            <p className='fs_10 fw-normal mb-0 pt-2'>Mihail Lacusta</p>
                            <p className='text_green fs_10 fw-semibold mb-0 pt-2'>$1,329,0139</p>
                            <p className='text_dark fs_8 fw-normal mb-0 pt-2'>Business Sale</p>
                            <form className='pt-3 d-flex align-items-center'>
                                <input type="checkbox" id="connected" />
                                <label className='fs_8 fw-normal ms-2' htmlFor="connected">Contacted</label>
                            </form>
                        </span>
                        {/***********CARD-2*******************/}
                        <span className='bg-white d-inline-block px-4 py-2 header_card_2'>
                            <div className="d-flex align-items-start">
                                <p className='fs_xsm fw-semibold mb-0'>Jordan <span className='d-block'>Wentworth</span></p>
                                <p className='fs_10 fw-semibold bg_skyblue d-inline-block mb-0 px-2 py-1 rounded-1 ms-3'>New</p>
                            </div>
                            <p className='text_green fs_xsm fw-semibold mb-0 pt-1'>$1,293,200</p>
                            <p className='text_dark fw-normal fs_10 mb-0 pt-2'>Boston, <span className='d-block'>MA Inheritance</span></p>
                            <form className='pt-3 d-flex align-items-center'>
                                <input type="checkbox" id="connectedd" />
                                <label className='fs_8 fw-semibold ms-2' htmlFor="connectedd">Contacted</label>
                            </form>
                        </span>
                        <img className='header_card_3' src={headerCard} alt="headerCard" />
                        <span className='header_card_4 px-4 py-2 d-inline-block bg-white'>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={profileIcon} alt="profileIcon" />
                                    <div className='ms-2'>
                                        <p className='fs_10 fw-normal mb-0'>Ciera Thomas</p>
                                        <p className='fs_10 fw-normal mb-0 text_dark'>Edit</p>
                                    </div>
                                </div>
                                <img src={threeDot} alt="threeDot" />
                            </div>
                            <div className=' border-1 border my-3'></div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p className='fs_10 fw-semibold mb-0'>1.</p>
                                <div className="d-flex">
                                    <div className="black_line_1"></div>
                                    <div className="green_line_1"></div>
                                    <div className="black_line_2"></div>
                                </div>
                                <img src={arrow} alt="img" />
                            </div>
                            <div className="d-flex align-items-center my-3">
                                <p className='fs_10 fw-semibold mb-0'>2.</p>
                                <div className="d-flex ms-2 ps-1">
                                    <div className="black_line_3"></div>
                                    <div className="green_line_2"></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className='fs_10 fw-semibold mb-0'>3.</p>
                                <div className="d-flex ms-2 ps-1">
                                    <div className="black_line_4"></div>
                                    <div className="green_line_3 mx-2"></div>
                                    <div className="black_line_5"></div>
                                </div>
                            </div>
                        </span>
                        <div className="header_card_5 position-absolute">
                            <div className='px-3 pt-2'>
                                <p className='fs_8 fw-normal mb-0'>5500 72nd Ave N</p>
                                <p className='text_green fs_8 fw-semibold mb-0'>$150,000</p>
                                <p className='pt-2 fs_5 fw-normal text_dark'>Pinellas Park, FL inheritance</p>
                            </div>
                            <div className='border border-1 border-success w-100'></div>
                            <div className='bg_light_green text-center pb-1'>
                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.51967 7.61458C6.38484 7.47975 6.32012 7.31683 6.32552 7.12582C6.33091 6.93481 6.40125 6.77189 6.53653 6.63706L8.44102 4.73257H0.924174C0.733163 4.73257 0.572939 4.66785 0.443501 4.53841C0.314063 4.40897 0.249568 4.24897 0.250018 4.05841C0.250018 3.8674 0.314737 3.70717 0.444175 3.57774C0.573613 3.4483 0.733612 3.3838 0.924174 3.38425H8.44102L6.51967 1.46291C6.38484 1.32808 6.31743 1.16785 6.31743 0.982234C6.31743 0.796616 6.38484 0.636616 6.51967 0.502235C6.6545 0.367403 6.81473 0.299988 7.00035 0.299988C7.18596 0.299988 7.34596 0.367403 7.48035 0.502235L10.5646 3.5865C10.632 3.65392 10.6799 3.72695 10.7082 3.8056C10.7365 3.88425 10.7505 3.96852 10.75 4.05841C10.75 4.1483 10.7358 4.23257 10.7075 4.31122C10.6792 4.38987 10.6316 4.4629 10.5646 4.53032L7.46349 7.63144C7.3399 7.75503 7.18551 7.81683 7.00035 7.81683C6.81518 7.81683 6.65495 7.74942 6.51967 7.61458Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className='header_card_6'>
                            <img src={activLead} alt="activLead" />
                        </div>
                    </Col>
                    <Col lg={6} className='z_index_5 mt-5 pt-5 mt-lg-0 pt-lg-0'>
                        <div className='mt-5 pt-5 text-center text-lg-start mt-sm-0 pt-sm-0'>
                            <h1 className='fs_xl fw-semibold pt-5 mt-5 mt-lg-0 pt-lg-0'>Grow your business with Event-Driven Predictive Analytics</h1>
                            <p className='text_dark fs_sm fw-normal mt-3'>It is a long established fact that a reader will be distracted by the using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it the look at you.</p>
                        </div>
                    </Col>
                </Row>

                {/***********SECOND-SECTION**************/}
                <Row className='mt-5 align-items-end'>
                    <Col lg={6}>
                        <Row className='pe-sm-5'>
                            <Col sm={4} className='text-center z_index_5'>
                                <p className='fs_md fw-semibold mb-0'>400mm+</p>
                                <p className='fs_sm fw-normal text_dark mt-2'>Data point used for analytics</p>
                            </Col>
                            <Col sm={4} className='text-center z_index_5'>
                                <p className='fs_md fw-semibold mb-0'>$3Tn</p>
                                <p className='fs_sm fw-normal text_dark mt-2'>Investable assets predicted per year</p>
                            </Col>
                            <Col sm={4} className='text-center z_index_5'>
                                <p className='fs_md fw-semibold mb-0'>$77Bn</p>
                                <p className='fs_sm fw-normal text_dark mt-2'>Predicted home value transacted per year </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className='mt-4 mt-lg-0'>
                            <Col sm={6}>
                                <div className="bg_green cards h-100 d-flex flex-column justify-content-between m-1">
                                    <div>
                                        <p className='fs_sm fw-semibold text_lightgreen'>boost your</p>
                                        <h2 className='fs_md fw-semibold text-white'>Financial <span className='d-lg-block'>Services</span></h2>
                                    </div>
                                    <div className=" learn_btn d-flex align-items-center justify-content-between crusor_pointer mt-4 pt-1">
                                        <a className='fs_sm fw-semibold text-white' href="#">Learn more</a>
                                        <img className='learn_btn_arrow' src={arroww} alt="arrow" />
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} className='mt-4 mt-sm-0'>
                                <div className="bg_darkblue cards h-100 d-flex flex-column justify-content-between m-1">
                                    <div>
                                        <p className='fs_sm fw-semibold text_lightgrey'>boost your</p>
                                        <h2 className='fs_md fw-semibold text-white pt-2'>Real Estate</h2>
                                    </div>
                                    <div className=" learn_btn d-flex align-items-center justify-content-between crusor_pointer mt-4 pt-1">
                                        <a className='fs_sm fw-semibold text-white' href="#">Learn more</a>
                                        <img className='learn_btn_arrow' src={arroww} alt="arrow" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header