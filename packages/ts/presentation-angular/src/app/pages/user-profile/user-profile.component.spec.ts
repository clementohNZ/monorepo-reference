import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { GetUserByEmailUseCase, UserRepository } from "@clementohnz/core";
import { of } from "rxjs";
import { UserProfileComponent } from "./user-profile.component";

describe(UserProfileComponent.name, () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userByEmailUseCase;
  const testEmail = `test@test.com`;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [CommonModule],
      providers: [
        GetUserByEmailUseCase,
        { provide: UserRepository, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ email: testEmail }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userByEmailUseCase = TestBed.inject(GetUserByEmailUseCase);
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });

  describe(`init`, () => {
    it(`should fetch the user's email`, () => {
      const testUser = { email: testEmail, password: `123` };
      spyOn(userByEmailUseCase, `execute`).and.returnValue(of(testUser));
      component.ngOnInit();
      expect(component.user).not.toBeUndefined();
      expect(userByEmailUseCase.execute).toBeCalledWith(testEmail);
    });
  });
});
