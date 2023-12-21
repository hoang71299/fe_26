import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div className="col-12">
        <div className='row'>
            <div className='col-9'>
            <div className="searchForm">
            <div className="form-group">
            <div className="btn-group">
                <input type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{width: '800px'}} />
                <div className="btn btn-info">Tìm</div>
            </div>
            </div>
        </div> {/* end tìm kiếm  */}
            </div>
            <div className='col-3'>
                <div onClick={ ()=>this.props.ketnoi()} className="btn btn-outline-info ">Thêm mới</div>
                <div className="btn btn-outline-secondary ">Đóng</div>
            </div>
        </div>
    </div>
    )
  }
}
