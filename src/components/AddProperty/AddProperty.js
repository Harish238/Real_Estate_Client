import { useState } from "react"
import BasicInfo from "./BasicInfo"
import GeneralInfo from "./GeneralInfo"
import LocationInfo from "./LocationInfo"
import PropertyDetails from "./PropertyDetails"
import { Navigate } from "react-router-dom";
import './AddProperty.css'
const AddProperty = () => {

    const [formData, setFormData] = useState({
        propertyType: "",
        negotiable: "",
        price: '',
        ownership: "",
        propertyAge: "",
        propertyApproved: "",
        propertyDescription: "",
        bankLoan: "",
        length: '',
        breath: '',
        totalArea: '',
        areaUnit: "",
        noOfBHK: "",
        noOfFloor: "",
        attached: "",
        western: "",
        furnished: "",
        carParking: "",
        lift: "",
        electricity: "",
        facing: "",
        name: "",
        mobile: '',
        postedBy: "",
        saleType: "",
        featuredPackage: "",
        ppdPackage: "",
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: ""
    });

    const [isTogle, setIsTogle] = useState({
        BasicInfo: true,
        propertyDetails: false,
        GeneralInfo: false,
        LocationInfo: false
    });
   
    let basic = document.getElementsByClassName('BasicInfo')
    let property = document.getElementsByClassName('PropertyDetail')
    let location = document.getElementsByClassName('LocationInfo')
    let general = document.getElementsByClassName('GeneralInfo')
    // console.log(basic, property, location, general)
    let token = localStorage.getItem('token')
    // if (isTogle.BasicInfo) basic.style.backgroundColor = '#6AB4F8'
    return (
        <>
            {
                token ?
                    <div>
                        {isTogle.BasicInfo && <BasicInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle} />}
                        {isTogle.propertyDetails && <PropertyDetails formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle} />}
                        {isTogle.GeneralInfo && <GeneralInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle} />}
                        {isTogle.LocationInfo && <LocationInfo formData={formData} setFormData={setFormData} isTogle={isTogle} setIsTogle={setIsTogle} />}
                    </div>
                    : <Navigate to="/login" />
            }

        </>
    )

}

export default AddProperty; 