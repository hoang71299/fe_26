import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <div className="col-9">
            <table className="table table-hover table-inverse ">
                <thead className="thead-inverse">
                <tr>
                    <th>STT</th>
                    <th>họ tên</th>
                    <th>số DT</th>
                    <th>phân quyền</th>
                    <th>chức năng</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Lê Văn A</td>
                    <td>090967683772</td>
                    <td>Admin</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                        <div className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1</td>
                    <td>Lê Văn A</td>
                    <td>090967683772</td>
                    <td>Admin</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                        <div className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1</td>
                    <td>Lê Văn A</td>
                    <td>090967683772</td>
                    <td>Admin</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                        <div className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1</td>
                    <td>Lê Văn A</td>
                    <td>090967683772</td>
                    <td>Admin</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
                        <div className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
</div>

    )
  }
}
