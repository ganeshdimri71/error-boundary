// import React from 'react'
// import { Button, Modal } from 'react-bootstrap'

// const ErrorComponent = () => {
//     return (

//         // <Modal>
//         //     <Modal.Header closeButton>
//         //         <Modal.Title>Modal title</Modal.Title>
//         //     </Modal.Header>
//         //     <Modal.Body>
//         //         <img src="ganesh.jpg" alt="sad face" />
//         //         <div
//         //             style={ { fontSize: '30px' } }
//         //         >Aaahh!!!</div>
//         //         <div
//         //             style={ { fontSize: '25px' } }
//         //         >Something went wrong</div>
//         //         <div
//         //             style={ { fontSize: '15px' } }
//         //         >Please contact Administrator!</div>
//         //     </Modal.Body>

//         // </Modal >
//         <Modal.Dialog
//             style={ {
//                 marginTop: '500px'
//             } }
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal title</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//                 <p>Modal body text goes here.</p>
//             </Modal.Body>
//         </Modal.Dialog>


//     )
// }

// export default ErrorComponent
import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
function Example () {
    const [ show, setShow ] = useState( true );

    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

    return (
        <>
            {/* <Button variant="primary" onClick={ handleShow }>
                Launch demo modal
            </Button> */}

            <Modal show={ show } onHide={ handleClose }
                style={ { marginTop: '10%' } }
            >
                <Modal.Header
                    style={ {
                        borderBottom: '0px !important'
                    } }
                    closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */ }
                </Modal.Header>
                <Modal.Body>
                    <img src="ganesh.jpg" alt="sad face"
                        // style={ { textAlign: 'center' } }
                        className="mx-auto d-block"
                    />
                    <div
                        style={ { fontSize: '30px', textAlign: 'center' } }
                    >Aaahh!!!</div>
                    <div
                        style={ { fontSize: '25px', textAlign: 'center' } }
                    >Something went wrong</div>
                    <div
                        style={ { fontSize: '15px', textAlign: 'center' } }
                    >Please contact Administrator!</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={ handleClose }>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={ handleClose }>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;
