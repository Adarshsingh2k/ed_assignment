import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./InvoiceForm.css"; // Import external CSS file
import ToggleSwitch from "./ToggleSwitch";

const validateForm = (values) => {
  const errors = {};

  // Vendor validation
  if (!values.vendor) {
    errors.vendor = "Vendor is required";
  }

  // Purchase Order Number validation
  if (!values.poNumber) {
    errors.poNumber = "Purchase Order Number is required";
  }

  // Invoice Number validation
  if (!values.invoiceNumber) {
    errors.invoiceNumber = "Invoice Number is required";
  }

  // Invoice Date validation
  if (!values.invoiceDate) {
    errors.invoiceDate = "Invoice Date is required";
  }

  // Total Amount validation
  if (!values.totalAmount) {
    errors.totalAmount = "Total Amount is required";
  } else if (isNaN(values.totalAmount)) {
    errors.totalAmount = "Total Amount must be a number";
  } else if (values.totalAmount <= 0) {
    errors.totalAmount = "Total Amount must be positive";
  }

  // Payment Terms validation
  if (!values.paymentTerms) {
    errors.paymentTerms = "Payment Terms are required";
  }

  // Invoice Due Date validation
  if (!values.invoiceDueDate) {
    errors.invoiceDueDate = "Invoice Due Date is required";
  }

  // GL Post Date validation
  if (!values.glPostDate) {
    errors.glPostDate = "GL Post Date is required";
  }

  // Invoice Description validation
  if (!values.invoiceDescription) {
    errors.invoiceDescription = "Invoice Description is required";
  }

  // Line Amount validation
  if (!values.lineAmount) {
    errors.lineAmount = "Line Amount is required";
  } else if (isNaN(values.lineAmount)) {
    errors.lineAmount = "Line Amount must be a number";
  } else if (values.lineAmount <= 0) {
    errors.lineAmount = "Line Amount must be positive";
  }

  // Department validation
  if (!values.department) {
    errors.department = "Department is required";
  }

  // Account validation
  if (!values.account) {
    errors.account = "Account is required";
  }

  // Location validation
  if (!values.location) {
    errors.location = "Location is required";
  }

  // Description validation
  if (!values.description) {
    errors.description = "Description is required";
  }

  return errors; // Return errors object
};

const InvoiceForm = () => {
  const [file, setFile] = useState(null);

  const initialValues = {
    vendor: "",
    poNumber: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    invoiceDueDate: "",
    glPostDate: "",
    invoiceDescription: "",
    lineAmount: "",
    department: "",
    account: "",
    location: "",
    description: "",
    comments: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    console.log("Uploaded File:", file);
    const formDetails = {
      values,
      fileName: file ? file.name : null,
    };

    localStorage.setItem("formDetails", JSON.stringify(formDetails));
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log("File Uploaded:", uploadedFile);
    }
  };

  return (
    <>
      <div className="d-flex-row-sb">
        <div className="d-flex-row">
          <img src="./BackArrow.svg" alt="back"></img>
          <p>Create New Invoice</p>
        </div>
      </div>
      <div className="invoice-form">
        {/* File Upload Section */}
        <div className="upload-section">
          <h3>Upload Your Invoice</h3>
          <p>To auto-populate fields and save time</p>
          <img src="./file_upload.svg" alt="upload_mg" />
          <label htmlFor="file-upload" className="upload-button">
            Upload File <img src="/upload-02.svg" alt="upload_icon"></img>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <span>Click to upload or Drag and drop</span>
          {file && <p>Uploaded File: {file.name}</p>}
        </div>

        {/* Form Section */}

        <div className="form-section">
          <div className="d-flex-row-fs">
            <div> Vendor Details</div>
            <div> Invoice Details</div>

            <div> Comments</div>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
          >
            {() => (
              <Form>
                <div className="section-header">
                  <div className="hd_img_pat">
                    <img
                      className="hd_sec_img"
                      src="./vendor_icon.svg"
                      alt=""
                    />
                  </div>
                  <h3>Vendor Details</h3>
                </div>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Vendor Information
                </p>
                <label>
                  Vendor <span className="imp">*</span>
                </label>
                <Field as="select" name="vendor">
                  <option value="">Select Vendor</option>
                  <option value="A1 Exterminators">A1 Exterminators</option>
                </Field>
                <div className="error">
                  <ErrorMessage name="vendor" />
                </div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#1787E0",
                    display: "flex",
                    margin: "0 auto",
                    justifyContent: "center",
                  }}
                >
                  <img src="./Toggle_Icon.svg" alt="toggle"></img> View Vendor
                  Details
                </p>

                <div style={{ margin: "20px 0" }}>
                  <div className="section-header">
                    <div className="hd_img_pat">
                      <img
                        className="hd_sec_img"
                        src="./invoice_icon.svg"
                        alt=""
                      />
                    </div>
                    <h3>Invoice Details</h3>
                  </div>
                  <div>
                    <p
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      General Information
                    </p>

                    <label>
                      Purchase Order Number <span className="imp">*</span>
                    </label>
                    <Field type="text" name="poNumber" />
                    <div className="error">
                      <ErrorMessage name="poNumber" />
                    </div>
                  </div>
                  <p
                    style={{
                      textAlign: "left",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Invoice Details
                  </p>

                  <div className="form-grid-layout">
                    <div>
                      <label>
                        Invoice Number <span className="imp">*</span>
                      </label>
                      <Field type="text" name="invoiceNumber" />
                      <div className="error">
                        <ErrorMessage name="invoiceNumber" />
                      </div>
                    </div>
                    <div>
                      <label>
                        Invoice Date <span className="imp">*</span>
                      </label>
                      <Field type="date" name="invoiceDate" />

                      <div className="error">
                        <ErrorMessage name="invoiceDate" />
                      </div>
                    </div>
                    <div>
                      <label>
                        Total Amount <span className="imp">*</span>
                      </label>

                      <div className="currency-input">
                        <span className="currency-symbol">$</span>
                        <Field
                          type="number"
                          name="totalAmount"
                          step="0.01"
                          placeholder="0.00"
                        />
                        <span className="currency-code">USD</span>
                      </div>
                      <div className="error">
                        <ErrorMessage name="totalAmount" />
                      </div>
                    </div>
                    <div>
                      <label>Payment Terms *</label>
                      <Field as="select" name="paymentTerms">
                        <option value="">Select</option>
                        <option value="Net 30">Net 30</option>
                        <option value="Net 60">Net 60</option>
                      </Field>
                      <div className="error">
                        <ErrorMessage name="paymentTerms" />
                      </div>
                    </div>

                    <div>
                      <label>
                        Invoice Due Date <span className="imp">*</span>
                      </label>
                      <Field type="date" name="invoiceDueDate" />
                      <div className="error">
                        <ErrorMessage name="invoiceDueDate" />
                      </div>
                    </div>
                    <div>
                      <label>
                        GL Post Date <span className="imp">*</span>
                      </label>
                      <Field type="date" name="glPostDate" />
                      <div className="error">
                        <ErrorMessage name="glPostDate" />
                      </div>
                    </div>
                  </div>
                  <label>
                    Invoice Description <span className="imp">*</span>
                  </label>
                  <Field as="textarea" name="invoiceDescription" />
                  <div className="error">
                    <ErrorMessage name="invoiceDescription" />
                  </div>
                  <div className="d-flex-row-sb ">
                    <p
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Expense Details
                    </p>
                    <div>
                      <ToggleSwitch />
                    </div>
                  </div>
                  <div className="form-grid-layout">
                    <div>
                      <label>
                        Line Amount <span className="imp">*</span>
                      </label>

                      <div className="currency-input">
                        <span className="currency-symbol">$</span>
                        <Field
                          type="number"
                          name="lineAmount"
                          step="0.01"
                          placeholder="0.00"
                        />
                        <span className="currency-code">USD</span>
                      </div>
                      <div className="error">
                        <ErrorMessage name="lineAmount" />
                      </div>
                    </div>
                    <div>
                      <label>
                        Department <span className="imp">*</span>
                      </label>
                      <Field type="text" name="department" />
                      <div className="error">
                        <ErrorMessage name="department" />
                      </div>
                    </div>
                    <div>
                      <label>
                        Account <span className="imp">*</span>
                      </label>
                      <Field type="text" name="account" />
                      <div className="error">
                        <ErrorMessage name="account" />
                      </div>
                    </div>
                    <div>
                      <label>
                        Location <span className="imp">*</span>
                      </label>
                      <Field type="text" name="location" />
                      <div className="error">
                        <ErrorMessage name="location" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>
                      Description<span className="imp">*</span>
                    </label>
                    <Field as="textarea" name="description" />
                    <div className="error">
                      <ErrorMessage name="description" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                    }}
                  >
                    <button className="addExpense">
                      {" "}
                      <img src="./plus.svg" alt="add"></img> Add Expense Coding
                    </button>
                  </div>
                </div>
                <div className="section-header">
                  <div className="hd_img_pat">
                    <img
                      className="hd_sec_img"
                      src="./comment_icon.svg"
                      alt=""
                    />
                  </div>
                  <h3>Comments</h3>
                </div>

                <Field
                  as="textarea"
                  name="comments"
                  placeholder="Add a comment..."
                />

                <div className="form-actions">
                  <button type="button">Save as Draft</button>
                  <button type="submit">Submit & New</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default InvoiceForm;
