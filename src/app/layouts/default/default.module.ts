import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { AdminDashboardComponent } from 'src/app/components/admin-dashboard/admin-dashboard.component';
import { CoachDashboardComponent } from 'src/app/components/coach-dashboard/coach-dashboard.component';
import { PlayerDashboardComponent } from 'src/app/components/player-dashboard/player-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoachTableComponent } from 'src/app/components/coach-table/coach-table.component';
import { CoachMatchesComponent } from 'src/app/components/coach-matches/coach-matches.component';
import { CoachPracticeSessionsComponent } from 'src/app/components/coach-practice-sessions/coach-practice-sessions.component';
import { PlayerTableComponent } from 'src/app/components/player-table/player-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlayerMatchesComponent } from 'src/app/components/player-matches/player-matches.component';
import { PlayerPracticeSessionsComponent } from 'src/app/components/player-practice-sessions/player-practice-sessions.component';
import { PlayerAttendanceComponent } from 'src/app/components/player-attendance/player-attendance.component';
import { PlayerScheduleComponent } from 'src/app/components/player-schedule/player-schedule.component';
import { AdminManageCoachesComponent } from 'src/app/components/admin-manage-coaches/admin-manage-coaches.component';
import { AdminManagePlayersComponent } from 'src/app/components/admin-manage-players/admin-manage-players.component';
import { AdminGenerateSchedulesComponent } from 'src/app/components/admin-generate-schedules/admin-generate-schedules.component';
import { AdminUserTableComponent } from "src/app/components/admin-user-table/admin-user-table.component";
import { AdminUpdateUserComponent } from 'src/app/components/admin-update-user/admin-update-user.component';
import { AdminCreateUserComponent } from 'src/app/components/admin-create-user/admin-create-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoachAssignRanksModalComponent } from 'src/app/components/coach-assign-ranks-modal/coach-assign-ranks-modal.component';
import { DashboardCardComponent } from 'src/app/components/dashboard-card/dashboard-card.component';
import { PlayerAttendanceTableComponent } from 'src/app/components/player-attendance-table/player-attendance-table.component';
import { PlayerMarkAttendanceModalComponent } from 'src/app/components/player-mark-attendance-modal/player-mark-attendance-modal.component';

@NgModule({
  declarations: [
    DefaultComponent,
    AdminDashboardComponent,
    AdminManageCoachesComponent,
    AdminManagePlayersComponent,
    AdminUserTableComponent,
    AdminGenerateSchedulesComponent,
    AdminUpdateUserComponent,
    AdminCreateUserComponent,
    CoachDashboardComponent,
    CoachTableComponent,
    CoachMatchesComponent,
    CoachPracticeSessionsComponent,
    CoachAssignRanksModalComponent,
    PlayerDashboardComponent,
    PlayerTableComponent,
    PlayerMatchesComponent,
    PlayerPracticeSessionsComponent,
    PlayerAttendanceComponent,
    PlayerScheduleComponent,
    DashboardCardComponent,
    PlayerAttendanceTableComponent,
    PlayerMarkAttendanceModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class DefaultModule { }