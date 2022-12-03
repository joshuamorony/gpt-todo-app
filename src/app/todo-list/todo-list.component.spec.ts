import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo item to the list when the add button is clicked', () => {
    const newTodoInput =
      fixture.debugElement.nativeElement.querySelector('input[type=text]');
    const addButton = fixture.debugElement.nativeElement.querySelector(
      'button[type=submit]'
    );

    newTodoInput.value = 'Test todo';
    addButton.click();

    fixture.detectChanges();

    const todoList = fixture.debugElement.nativeElement.querySelector('ul');
    expect(todoList.innerHTML).toContain('Test todo');
  });

  it('should toggle the completed property on a todo item when the checkbox is clicked', () => {
    component.addTodo('Test todo');
    fixture.detectChanges();

    const todoCheckbox = fixture.debugElement.nativeElement.querySelector(
      'input[type=checkbox]'
    );
    todoCheckbox.click();

    fixture.detectChanges();

    const todoListItem = fixture.debugElement.nativeElement.querySelector('li');
    expect(todoListItem.classList).toContain('completed');
  });

  it('should delete a todo item from the list when the delete button is clicked', () => {
    component.addTodo('Test todo');
    fixture.detectChanges();

    const deleteButton =
      fixture.debugElement.nativeElement.querySelector('button');
    deleteButton.click();

    fixture.detectChanges();

    const todoList = fixture.debugElement.nativeElement.querySelector('ul');
    expect(todoList.innerHTML).not.toContain('Test todo');
  });
});
