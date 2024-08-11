import React from 'react'
import {
    CButton,
    CCard,
    CFormCheck,
    CFormSelect,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CCardHeader,
    CCardBody
} from '@coreui/react'
import { postCreateUser } from '../../data/api';

const CreateUser = () => {
    const [event, updateEvent] = React.useReducer(
        (prev, next) => {
            return { ...prev, ...next };
        },
        { name: '', password: '' },
    );

    const formHander = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        const createRes = await postCreateUser({email: formValues.email, password: formValues.nim, role: "student"})
        console.log("Berhasil daftar", createRes)
    }
    return (
        <>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Masukan Data Diri</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm className="row g-3" onSubmit={formHander}>
                            <CCol md={6}>
                                <CFormInput type="nama" name="Nama" label="Nama"/>
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="email" name="email" label="Email" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="nim" name="nim" label="Nomor Induk Mahasiswa" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="phone" name="inputPassword4" label="Nomor Telefon" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="alamat" name="alamat" label="Alamat" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="school" name="school" label="Asal Sekolah" />
                            </CCol>

                            <CCol md={6}>
                                <CFormInput type="namaortu" name="namaortu" label="Nama Orang Tua" />
                            </CCol>
                            <CCol md={6}>
                                <CFormInput type="telportu" name="telportu" label="Telefon Orang Tua" />
                            </CCol>

                            <CCol md={3}>
                                <CFormLabel htmlFor="formFile">Photo</CFormLabel>
                                <CFormInput type="file" name="formFile" />
                            </CCol>

                            <CCol md={3}>
                                <CFormInput name="inputCity" label="Tanggal Lahir" type="date" />
                            </CCol>
                            <CCol md={4}>
                                <CFormSelect name="inputState" label="Gender">
                                    <option>Choose...</option>
                                    <option>Laki Laki</option>
                                    <option>Perempuan</option>
                                </CFormSelect>
                            </CCol>
                            <CCol md={2}>
                                <CFormInput name="tinggi" label="Tinggi Badan" />
                            </CCol>
                            <CCol md={11}>
                                {/* <CFormCheck type="checkbox" id="gridCheck" label="Check me out" /> */}
                            </CCol>
                            <CCol md={1}>
                                <CButton color="primary" type="submit">Submit</CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </>
    )
}

export default CreateUser