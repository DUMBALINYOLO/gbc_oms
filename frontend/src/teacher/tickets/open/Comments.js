import React, {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import {
  addComment,


} from '../../../actions/tickets/comments';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import Asign from './Asign';
import ReAsign from './ReAsign';



function Comments(props) {
  let tick = {
    comment: '',
    ticket_id: props.data.id,
  }

  const {comments, userName, token, data} = props;
  const [record, setRecord]  = useState(tick)
  const {id} =props.data;
  const [ticketDialog, setTicketDialog] = useState(false);
  const [commentDialog, setCommentDialog] = useState(false);


  const openComment = () => {
    setCommentDialog(true);
  }

  const openTicket = () => {
    setTicketDialog(true);
  }

  const hideCommentDialog = () => {
    setCommentDialog(false);
  }

  const hideTicketDialog = () => {
    setTicketDialog(false);
  }




  const saveComment = (e) => {
      e.preventDefault();
      let _record = {...record};
      if (record.id) {
          return;
      }
      else {
          props.addComment(_record, token)
      }
      props.getComments(id, token);
      setRecord(tick)
  }

  const onInputChange = (e, name) => {
      const val = (e.target && e.target.value) || '';
      let _record = {...record};
      _record[`${name}`] = val;
      setRecord(_record);
  }


  return (
    <div style={{padding: '40px'}}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={12}>
          <Card className="card-box mb-4">
            <div className="p-4 text-center">
               <h4 className="font-size-lg font-weight-bold my-2">
                 {data.subject}
               </h4>
               <div className="text-center my-4">
                 <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                   {data.category}
                 </span>
                 <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                   {data.status}
                 </span>
                 <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                   {data.priority}
                 </span>
                 <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                   {data.created}
                 </span>
               </div>
             </div>

             <Dialog
                visible={ticketDialog}
                style={{ width: '400px' }}
                header="IMAGE FORM"
                modal
                className="p-fluid"
                onHide={hideTicketDialog}
                >
                    <Asign
                        id ={id}
                        ticketDialog={setTicketDialog}
                    />
            </Dialog>
            <Dialog
                visible={commentDialog}
                style={{ width: '400px' }}
                header="IMAGE FORM"
                modal
                className="p-fluid"
                onHide={hideCommentDialog}
                >
                    <ReAsign
                        id ={id}
                        ticketDialog={setCommentDialog}
                    />
            </Dialog>



            <CardContent className="p-3" style={{paddingTop: '20px'}}>
              <div className="scroll-area ">
                <PerfectScrollbar>
                  {
                    comments.map((comment) => {
                      return (
                      <div className="chat-wrapper" key={comment.id}>
                        {comment.user !== userName ?
                            <div className="chat-item p-2 mb-2">
                              <div className="align-box-row">
                                <div>
                                  <div className="chat-box bg-first text-white">
                                    <p>{comment.user}</p>
                                    <p>{comment.comment}</p>
                                  </div>
                                  <small className="mt-2 d-block ">
                                    <FontAwesomeIcon
                                      icon={['far', 'clock']}
                                      className="mr-1 opacity-5"
                                    />
                                    {comment.created}
                                  </small>
                                </div>
                              </div>
                            </div>

                           : <div className="chat-item chat-item-reverse p-2 mb-2">
                            <div className="align-box-row flex-row-reverse">
                              <div>
                                <div className="chat-box bg-first text-white">
                                  <p>me</p>
                                  <p>
                                    {comment.comment}
                                  </p>

                                </div>
                                <small className="mt-2 d-block ">
                                  <FontAwesomeIcon
                                    icon={['far', 'clock']}
                                    className="mr-1 opacity-5"
                                  />
                                    {comment.created}
                                </small>
                              </div>
                            </div>
                          </div>
                        }

                      </div>
                      );
                    })
                  }

                </PerfectScrollbar>
              </div>
            </CardContent>
            <div className="card-footer bg-royal">
              <div>
                <TextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  value={record.comment}
                  onChange={(e) => onInputChange(e, 'comment')}
                  placeholder="Write your message and hit enter to send..."
                />
              </div>

              <div className="align-box-row mt-3">
                <div className="ml-auto">
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={saveComment}
                   >
                    SEND
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = state => ({
    userName: state.auth.userName,
    token: state.auth.token,
});

export default connect(
    mapStateToProps,
    {
      addComment,
    }
  )(Comments);
