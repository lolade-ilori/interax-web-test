import { GoogleSpreadsheet } from "google-spreadsheet"
import type { NextPage } from "next"
import Link from "next/link"
import { FormEvent, useState } from "react"
import {
  AbsoluteWaitlistWrap,
  JoinWaitlisBtn,
  SubFormWrap,
  WaitliistInput,
  WaitlistFooter,
  WaitlistForm,
  WaitlistFormOverall,
  WaitlistHeader,
  WaitlistTxtWrap,
  WaitlistWrap,
} from "./waitlist.styles"

const Waitlist: NextPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  // Config variables
  const SPREADSHEET_ID = "1_DMr1781KkTkhNwCXDob9UAN2aSXWRhHmLSSyBdKIxI"
  const SHEET_ID = 0
  const GOOGLE_CLIENT_EMAIL =
    "interax@waiting-list-383710.iam.gserviceaccount.com"
  const GOOGLE_SERVICE_PRIVATE_KEY =
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwufvAhVbd9axb\nf/T4Lko15sS1XUOHygWMBkEiuU/65pNFs8in8CwBIsw0ibntciDrObdN9MVpLPDd\n7gBziOaHriYlfHIPyvPqf3voPzYiZUDkgX8RyKsGT0EHINevbhySjV6mXMf0aArQ\nZ1pgWJGQ2BNzYhJmAqJSc7APmeENz+7SkwGWOGKF05HPwAF9hasD96T0LbcCyASw\nK+wIHU+UGCQjky65PH8a5xiiwHfPp+upMdKc1VX8cuBZqG7mMxc+XVAzTi9L28dy\n0uh8D/QmUSngxEEcLMSLDlIFXo1ySMyhVHhhvIBDemaS7G1/ulRsWwtycrkJ1NIb\newulxmyPAgMBAAECggEADoiE7QyqG5+/+FhZ/2zjGnKrW5TbYFfbQ+whwCbILoR2\nuQUza6gjHkbLz0hCO4YmseFxsx39fAw/lKilbdrkxmSqa2vD/4t7qp2oRW2pWIPG\nJeSGXCKJ+f9bhCgNxLYD8INitMCtiuphdUkClCjEc8ppMxRuGeh+i9RKtsW7TcTY\nKZlrZht4F9wMApdRuLxeEQ/Ri1typojykW1Po8WmOuUPqP9kcXlGKJCvT1d413Dj\niM1eqqtk5+lJTUZPwt2RCqVJbgI7u59mU+RtjztrgSXtmGxnTqDc4I/cGiuM6d/h\nMvWQ+iTqq4TZFEh/JYgYG6uoIVu19+LHWVJlx2sODQKBgQDop1RXJbRHh+LXHV72\nG9fkKd8Q48v6Z7U0jGWdsTTYYS5kGvNM14F/OkwK1u0Bwukntyp4w5H/gXrZWLC4\nLSylAmk2WkTbuusUtY2/zoPXErMa49ngxZ8K2gkst1FLoAi4yYbTQvgms4Mf1Fdc\n/HFOzaSlkpMuh8Lq+nfZ/g4MpQKBgQDCde8szSWYWhtj6H1Kvl7RWk2ngb2HmMnx\nib0Wf+L6sywg4gdKypZ3RpJFudV+sumEMRDB5SKVSMa2ZM6Hnkp+eqM6oeGnE932\nPxMq7TKvHIbd+alu5S/15qjqyKQ1GExsiF7/T+8uAhVQtpMxDIApnLqKNgua9lBa\nmJrtW/dKIwKBgQDKYEPNSs73Kgz4cmQYUUALCSEw3/afa3cErtv1wB/n2SExkv/w\n58WNlnhvNWYVEicelQYs5nIpf8gNKEkQ7LrZDq/Wx87+FCpJaWRUZJ/qhimmSm1M\nSJuAJQm2DAB7eEod86+ENc0GXUDCf0M/b5hgpCGEpWvCHfY/0IBQ793owQKBgFfc\nh1tbuY/Trqp+ghXCW/8FaS60/RiGHUBH9qpyz/BsAhU9awQM8t0jgrWEWIUtezri\nHGsvB2giAL6qX3KBP7FT4ep8+ALQhCpdp2Bu2carAfjLdBWJ8hiNxmaGj0L6HpWv\nLBT5Xd0QzeaxB2JS/plOmi4Waznx7q5wYxe5xMq3AoGBAIuE+1YVda7d/gBOTcPg\nW92R3PS5stsFpu1Ayv3ugARiCi3i59BtlILaTIR2Hgqjic1cxJ5wD3WhKlAqLzfy\njtbJ6gc/6YmlBGZFinHNs29ACjiX+03nUwlOuSENzqViViqrAOHVT0REBsKQ+YZa\nc5wRZ7Jl5z4uJ4Sq+1ZBpXp3\n-----END PRIVATE KEY-----\n"

  // GoogleSpreadsheet Initialize
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

  // Append Function
  const appendSpreadsheet = async (row: any) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      })
      // loads document properties and worksheets
      await doc.loadInfo()

      const sheet = doc.sheetsById[SHEET_ID]
      await sheet.addRow(row)
    } catch (e) {
      // console.error("Error: ", e)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let form = {
      name,
      email,
      phone,
      message,
    }
    const newRow = {
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      Type: form.message,
    }
    appendSpreadsheet(newRow)

    setMessage("")
    setPhone("")
    setName("")
    setEmail("")

    // const rawResponse = await fetch("/api/submit", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // })
    // const content = await rawResponse.json()

    // // print to screen
    // alert(content.data.tableRange)

    // // Reset the form fields
    // setMessage("")
    // setPhone("")
    // setName("")
    // setEmail("")
  }
  return (
    <WaitlistWrap>
      <AbsoluteWaitlistWrap>
        <img src="/assets/png/rays.png" />
      </AbsoluteWaitlistWrap>
      <div className="waitlist-inner">
        <WaitlistHeader>
          <Link href={"/"}>
            <img src="/assets/svg/interax-logo-light.svg" />
          </Link>
        </WaitlistHeader>

        <WaitlistTxtWrap>
          <h4>Get Early Access!</h4>

          <h2>Join our interaX waitlist for early launch update</h2>
        </WaitlistTxtWrap>

        <WaitlistFormOverall>
          <WaitlistForm onSubmit={handleSubmit}>
            <SubFormWrap>
              <WaitliistInput
                type={"text"}
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <WaitliistInput
                type={"email"}
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SubFormWrap>

            <SubFormWrap>
              <WaitliistInput
                type={"text"}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <WaitliistInput
                type={"text"}
                placeholder="Doctor/User?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </SubFormWrap>

            <JoinWaitlisBtn type="submit">Join waitlist</JoinWaitlisBtn>
          </WaitlistForm>
        </WaitlistFormOverall>
      </div>
      <WaitlistFooter>
        <div className="flex-wrap">
          <div className="circle">
            <img src="/assets/svg/blue-twitter.svg" />
          </div>

          <div className="circle">
            <img src="/assets/svg/blue-insta.svg" />
          </div>

          <div className="circle">
            <img src="/assets/svg/blue-linkedin.svg" />
          </div>
        </div>

        <h4>2023 interaX. All rights reserved...</h4>
      </WaitlistFooter>
    </WaitlistWrap>
  )
}

export default Waitlist
