import React, { Component } from 'react'

export default class UserName extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={trangthai:false}
    }
    hienNut=()=>{
        if(this.state.trangthai===false){
            return <div onClick={()=>this.doiTrangThai()} className="btn btn-outline-info btn-block">Thêm mới</div>;
        }else {
            return( <div  onClick={ arf } className="btn btn-outline-secondary btn-block">Đóng</div>
            )
            
        }
    }
    doiTrangThai=()=>{
        this.setState({trangthai:!this.state.trangthai()})
    }
    hienForm=()=>{}
  render() {
    return (
        <div className="col-3">
            {this.hienNut()}
        
            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Thêm thành viên</div>
                <div className="card-body text-primary">
                <div className="form-group">
                    <input type="text" className="form-control" name id placeholder="Tên user" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name id placeholder="Số điện thoại" />
                </div>
                <div className="form-group">
                    <select className="form-control" name id>
                    <option selected>Choose...</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    <option value={3}>Modrater</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="btn btn-block btn-primary">Thêm</div>
                </div>
                </div>
            </div>
        </div>


    )
  }
}
