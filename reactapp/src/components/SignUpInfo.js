import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Name"
        value={formData.eventName}
        onChange={(event) =>
          setFormData({ ...formData, eventName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter applicant name"
        value={formData.applicantName}
        onChange={(event) =>
          setFormData({ ...formData, applicantName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter applicant address"
        value={formData.applicantAddres}
        onChange={(event) =>
          setFormData({ ...formData, applicantAddress: event.target.value })
        }
      />
       <input
        type="text"
        placeholder="Enter applicant mobile number"
        value={formData.applicantMobileNumber}
        onChange={(event) =>
          setFormData({ ...formData, applicantMobileNumber: event.target.value })
        }
      />
       <input
        type="text"
        placeholder="Enter applicant email ID"
        value={formData.applicantEmailId}
        onChange={(event) =>
          setFormData({ ...formData, applicantEmailId: event.target.value })
        }
      />

    </div>
  ); 


}

export default SignUpInfo;