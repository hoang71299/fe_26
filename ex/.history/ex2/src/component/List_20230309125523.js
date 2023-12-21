import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <div class="col-9">
                    <table class="table table-hover table-inverse ">
                        <thead class="thead-inverse">
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
                                        <div class="btn-group">
                                            <div class="btn btn-warning sua"><i class="fa fa-pencil" aria-hidden="true"></i>Sửa</div>
                                            <div class="btn btn-danger xoa"><i class="fa fa-minus" aria-hidden="true"></i> Xóa</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Lê Văn A</td>
                                    <td>090967683772</td>
                                    <td>Admin</td>
                                    <td>
                                        <div class="btn-group">
                                            <div class="btn btn-warning sua"><i class="fa fa-pencil" aria-hidden="true"></i>Sửa</div>
                                            <div class="btn btn-danger xoa"><i class="fa fa-minus" aria-hidden="true"></i> Xóa</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Lê Văn A</td>
                                    <td>090967683772</td>
                                    <td>Admin</td>
                                    <td>
                                        <div class="btn-group">
                                            <div class="btn btn-warning sua"><i class="fa fa-pencil" aria-hidden="true"></i>Sửa</div>
                                            <div class="btn btn-danger xoa"><i class="fa fa-minus" aria-hidden="true"></i> Xóa</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Lê Văn A</td>
                                    <td>090967683772</td>
                                    <td>Admin</td>
                                    <td>
                                        <div class="btn-group">
                                            <div class="btn btn-warning sua"><i class="fa fa-pencil" aria-hidden="true"></i>Sửa</div>
                                            <div class="btn btn-danger xoa"><i class="fa fa-minus" aria-hidden="true"></i> Xóa</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
    )
  }
}
