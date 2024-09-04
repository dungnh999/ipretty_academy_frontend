import React, {useEffect, useRef, useState} from 'react';
import Modal from "react-modal";

const ModalTemplate = (props) => {
    const [modalBodyHeight, setModalBodyHeight] = useState('auto');

    const headerRef = useRef(0);
    const footerRef = useRef(0);

    const updateModalBodyHeight = () => {
        const viewportHeight = window.innerHeight;
        const headerHeight = headerRef.current.offsetHeight;
        const footerHeight = footerRef.current.offsetHeight;
        const padding = 50 ;
        const bodyHeight = viewportHeight - headerHeight - footerHeight - padding;
        setModalBodyHeight(`${bodyHeight}px`);
    };


    useEffect(() => {
        if(props.isOpen) {
            document.body.classList.add('overflow-hidden');
            setTimeout(updateModalBodyHeight, 0);
            window.addEventListener('resize', updateModalBodyHeight);
        } else {
            document.body.classList.remove('overflow-hidden');
            window.removeEventListener('resize', updateModalBodyHeight);
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
            window.removeEventListener('resize', updateModalBodyHeight);
        };

    }, [props.isOpen]);

    /*
    * isOpen : True là mở
    * onRequestClose : Hàm đóng modal
    * titleHeader : content của header
    * close : dấu x để đóng model truyền hàm close
    * isFooter : Hiện footer hay không true và false
    * footerContent : Nội dung của footer
    * */

    return(
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            contentLabel="Example Modal"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            style={{
                outline: 'none'
            }}
            className={{
                base: 'fixed inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
                afterOpen: 'opacity-100',
                beforeClose: 'opacity-0',
                outLine: 'none',
            }}
            overlayClassName={{
                base: 'fixed inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300',
                afterOpen: 'opacity-100',
                beforeClose: 'opacity-0',
            }}
        >
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
                <div className='modal-content overflow-hidden max-h-full'>
                    <div className='modal-header p-3' ref={headerRef}>
                        <h2 className="text-2xl font-semibold">{props.titleHeader}</h2>
                        <button
                            onClick={props.close}
                            className="absolute top-0 right-0 m-4 text-lg font-semibold text-gray-500"
                        >
                            &times;
                        </button>
                    </div>
                    <div className='modal-body overflow-y-auto p-4' style={{ maxHeight: modalBodyHeight }}>
                        {props.children}
                    </div>
                    {props.isFooter
                        ?   <div className='modal-footer' ref={footerRef}>
                                {props.footerContent}
                            </div>
                        :  ''
                    }
                </div>
            </div>
        </Modal>
    )
};

export default ModalTemplate;