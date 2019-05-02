import React from "react";
import { findAnnotation } from "@utils";
import { InputField, DropDownField } from "../";

type FieldProps = {
  data: Object,
  inputData: Object,
  onChange: (e: Event) => {}
};

export const Field = ({
  data,
  fieldData,
  inputData,
  onChange,
  onDelete,
  updateShexJ,
  canDelete,
  parent
}: FieldProps) => {
  const inputType = data.valueExpr.values ? "select" : "text";
  const predicate = data.predicate;
  const annotation = findAnnotation("layoutprefix", data.annotations);
  const hasPrefix = annotation && annotation.object.value;
  const parentPredicate = parent && parent.predicate ? parent.predicate : null;
  const parentSubject = parent && parent._formValues[0]._formFocus.parentSubject;

  return (
    <React.Fragment>
      {inputType === "text" ? (
        <InputField
          {...{
            type: "text",
            fieldData,
            inputData,
            onChange,
            predicate,
            hasPrefix,
            parentPredicate,
            parentSubject,
            updateShexJ,
            canDelete,
            onDelete,
            valueExpr: data.valueExpr,
            error: data.error
          }}
        />
      ) : (
        <DropDownField
          {...{
            data,
            inputData,
            fieldData,
            onChange,
            onDelete,
            predicate,
            hasPrefix,
            parentPredicate
          }}
        />
      )}
    </React.Fragment>
  );
};