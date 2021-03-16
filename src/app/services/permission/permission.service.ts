import { Injectable, Injector } from '@angular/core';
import { PermissionItem } from './permission.class';
import { UserService } from '../../@core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  // 权限 code
  public static userCode: string = "";

  private permissions: any = {};

  constructor(private injector: Injector) {

  }

  get userService(): UserService {

    return this.injector.get(UserService);
  }

  // 鉴权
  public AuthPermission(permission: PermissionItem): boolean {

    const user = this.userService.read() || {};

    // 主账号无限权
    if (user.accountType === 1) {

      return true;
    }

    return this.hasPermission(permission);
  }

  public getUserPermissionCode() {

    if (PermissionService.userCode) {
      return PermissionService.userCode;
    }

    const user = this.userService.read() || {};
    const code = user.code || '';
    if (!PermissionService.userCode) PermissionService.userCode = code;

    return code;
  }

  public addPermission(permission: PermissionItem): void {

    const userPermission: any = PermissionService.userCode ? PermissionService.userCode.split(",") : [];
    const [index, pos] = permission.value.split(",");
    const _index: number = parseInt(index);
    const _pos: number = parseInt(pos);
    userPermission[_index] = (userPermission[_index] || 0) | 2 ** _pos;

    PermissionService.userCode = userPermission.join(",");
  }


  public delPermission(permission: PermissionItem): void {

    const userPermission: any = PermissionService.userCode ? PermissionService.userCode.split(",") : [];
    const [index, pos] = permission.value.split(",");
    const _index: number = parseInt(index);
    const _pos: number = parseInt(pos);

    userPermission[_index] = (userPermission[_index] || 0) & (~(2 ** _pos));

    PermissionService.userCode = userPermission.join(",");
  }


  public hasPermission(permission: PermissionItem): boolean {

    const userPermission: any = PermissionService.userCode ? PermissionService.userCode.split(",") : [];
    const [index, pos] = permission.value.split(",");
    const _index: number = parseInt(index);
    const _pos: number = parseInt(pos);
    const permissionValue = 2 ** _pos;

    return (userPermission[_index] & permissionValue) === permissionValue;
  }

  public listPermission(): Array<string> {

    const results: Array<string> = [];

    if (!PermissionService.userCode) return results;

    Object.values(this.permissions).forEach((permission: any) => {
      this.hasPermission(permission) && results.push(permission.label);
    });

    return results;
  }

  public valuePermission(): Array<string> {

    const results: Array<string> = [];

    if (!PermissionService.userCode) return results;

    Object.values(this.permissions).forEach((permission: any) => {
      this.hasPermission(permission) && results.push(permission.value);
    });

    return results;
  }

}
