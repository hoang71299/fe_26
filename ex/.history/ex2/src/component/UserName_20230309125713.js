import React, { Component } from 'react'

export default class UserName extends Component {
  render() {
    return (
    <div class="col-3">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Thêm thành viên</div>
            <div class="card-body text-primary">
                <div class="form-group">
                    <input type="text" class="form-control" name="" id="" placeholder="Tên user">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="" id="" placeholder="Số điện thoại">
                </div>
                <div class="form-group">
                    <select class="form-control" name="" id="">
                    <option selected>Choose...</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    <option value="3">Modrater</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="btn btn-block btn-primary">Thêm</div>
                </div>
            </div>
  
          </div>
    </div>
    )
  }
}
