import classes from "./Pending.module.css";
import classes2 from "./Completed.module.css";
import classes3 from "./All.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";

const AssignmentBoxPending = (props) => {
  return (
    <div className={classes.assignmentBox}>
      <div className={classes.assignmentTitle}>
        <div>{props.oneAssignment.title}</div>
        <div style={{ fontSize: "20px" }}>
          <HiDotsVertical />
        </div>
      </div>
      <div style={{ fontSize: "12px" }}>
        Assign by:
        <span
          style={{ fontSize: "14px", fontWeight: "bold", color: "#696969" }}
        >
          {props.oneAssignment.creater}
        </span>
      </div>
      <div className={classes.CreditId}>
        <div className={classes.totalCredit}>
          <GrScorecard style={{ fontSize: "12px" }} />
          <span style={{ fontSize: "12px" }}>Total Credit:</span>
          <span style={{ fontWeight: "bold", color: "#696969" }}>
            {props.oneAssignment.credit}
          </span>
        </div>

        <div className={classes.courseid}>{props.oneAssignment.id}</div>
      </div>

      <div className={classes.assignmentprogesssection}>
        <div>
          <label style={{ fontSize: "12px" }}>progress</label>
          <div class={classes.progress}>
            <div class={classes.bar}></div>
          </div>

          <div className={classes.assignmentidupload}>
            <div className={classes.status}>
              {props.oneAssignment.status_}Ongoing
            </div>
            <div className={classes.uploadBtn}>
              <button type="file" className={classes.answerFileUpload}>
                Upload
              </button>
            </div>
          </div>
        </div>

        <div className={classes.assignmentDetails}>
          <div>
            <div>
              Start Date:
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#1b1e24",
                  paddingTop: "5px",
                }}
              >
                {props.oneAssignment.publishDate}
              </div>
            </div>
            <div style={{ paddingTop: "10px" }}>
              Due Date:
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#1b1e24",
                  paddingTop: "5px",
                }}
              >
                {props.oneAssignment.dueDate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentBoxPending;
