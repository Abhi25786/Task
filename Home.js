import { bindActionCreators } from "redux";

const updateFirstName = name => ({ type: "CHANGE_FIRSTNAME", payload: name });
const updateLastName = lastName => ({
  type: "CHANGE_LASTNAME",
  payload: lastName
});
const updateEmail = email => ({ type: "CHANGE_EMAILID", payload: email });
const updateIban = iban => ({ type: "CHANGE_IBAN", payload: iban });
const updateBankName = bankName => ({
  type: "CHANGE_BANKNAME",
  payload: bankName
});