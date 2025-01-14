using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class _6thCreateplus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ServicesDatas",
                table: "ServicesDatas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CommentItem",
                table: "CommentItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CaseStudyPostDatas",
                table: "CaseStudyPostDatas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BlogDatas",
                table: "BlogDatas");

            migrationBuilder.AlterColumn<string>(
                name: "ImagePath",
                table: "ServicesDatas",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "ServicesDatas",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<string>(
                name: "Text",
                table: "CommentItem",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "CommentItem",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "CaseStudyPostDatas",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "CaseStudyPostDatas",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "CaseStudyPostDatas",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "BlogDatas",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "BlogDatas",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "BlogDatas",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ServicesDatas",
                table: "ServicesDatas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CommentItem",
                table: "CommentItem",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CaseStudyPostDatas",
                table: "CaseStudyPostDatas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BlogDatas",
                table: "BlogDatas",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ServicesDatas",
                table: "ServicesDatas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CommentItem",
                table: "CommentItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CaseStudyPostDatas",
                table: "CaseStudyPostDatas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BlogDatas",
                table: "BlogDatas");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "ServicesDatas");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "CommentItem");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "CaseStudyPostDatas");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "BlogDatas");

            migrationBuilder.AlterColumn<string>(
                name: "ImagePath",
                table: "ServicesDatas",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Text",
                table: "CommentItem",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "CaseStudyPostDatas",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "CaseStudyPostDatas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Type",
                table: "BlogDatas",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "BlogDatas",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ServicesDatas",
                table: "ServicesDatas",
                column: "ImagePath");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CommentItem",
                table: "CommentItem",
                column: "Text");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CaseStudyPostDatas",
                table: "CaseStudyPostDatas",
                column: "Type");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BlogDatas",
                table: "BlogDatas",
                column: "Type");
        }
    }
}
